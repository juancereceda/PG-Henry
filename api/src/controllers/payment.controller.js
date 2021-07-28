const mercadopago = require("mercadopago");
const User = require("../models/User");
const Movie = require("../models/Movie");
const axios = require("axios");
const access_token =
  "TEST-4845784497089801-071314-abf58aac96d8d07a310c5d5c3575363d-170585248";
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
//ykxotzanjxikdvjt
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "autocinehenry@gmail.com", // generated ethereal user
    pass: "ykxotzanjxikdvjt", // generated ethereal password
  },
});

mercadopago.configure({
  access_token,
});

const config = {
  headers: {
    "Access-Control-Allow-Headers": "Authorization",
    Authorization: `Bearer ${access_token}`,
  },
};

const processPayment = async (req, res) => {
  try {
    const { total, description, parking_lot, extras, movie_title, date, time } =
      req.body;
    const user = await User.findById(req.userId);
    const preference = {
      items: [
        {
          title: description,
          quantity: 1,
          description: user.email,
          currency_id: "ARS",
          unit_price: Number(total),
          id: movie_title,
        },
      ],
      auto_return: "approved",
      back_urls: {
        failure: `http://localhost:3000/success/${req.userId}/`,
        pending: "http://localhost:3000/products",
        success: `http://localhost:3000/success/${req.userId}/`,
      },
    };
    let result = await mercadopago.preferences.create(preference);
    console.log(result);

    let newBooking = {
      id: result.body.id,
      payment_url: result.body.init_point,
      status: "processing",
      parking_lot,
      extras,
      movie_title,
      date,
      time,
    };

    let bookings = user.bookings;

    const updatedUser = await User.findByIdAndUpdate(req.userId, {
      bookings: [...bookings, newBooking],
    });

    res.status(201).send(result.body.init_point);
  } catch (error) {
    console.log(error);
  }
};

const updateBooking = async (req, res) => {
  try {
    const { status, preference_id } = req.body;
    const user = await User.findById(req.userId);
    const bookings = user.bookings.map((el) =>
      el.id === preference_id ? { ...el, status } : el
    );
    console.log(preference_id);
    let foundShow = user.bookings.find((el) => el.id === preference_id);
    let movie_title = foundShow.movie_title;
    let date = foundShow.date;
    let parking_lot = foundShow.parking_lot;
    let time = foundShow.time;
    if (status === "approved") {
      let movieFound = await Movie.findOne({ title: movie_title });

      let updatedShows = movieFound.shows.map((el) =>
        el.date.includes(date)
          ? {
              ...el,
              time: el.time.map((show) =>
                show.hasOwnProperty(time)
                  ? {
                      ...show,
                      [time]: show[time].map((slot) =>
                        slot.slot === parking_lot
                          ? { ...slot, ocuppied: true }
                          : slot
                      ),
                    }
                  : show
              ),
            }
          : el
      );

      await Movie.findOneAndUpdate(
        { title: movie_title },
        { shows: updatedShows }
      );
    }

    await User.findByIdAndUpdate(req.userId, {
      bookings,
    });

    if (status === "approved") {
      const img = await QRCode.toDataURL(
        `http://localhost:3000/bookings/${preference_id}`,
        {
          width: 400,
        }
      );
      await transporter.sendMail({
        from: '"AutoCine Henry 🎥" <autocinehenry@gmail.com>', // sender address
        to: user.email, // list of receivers
        subject: "Ticket booked succesfully", // Subject line
        attachDataUrls: true,
        html: `
        <h1 style="color: #f05454;">Thanks for choosing us!</h1>
        <p style="color: #000000">Hello ${
          user.username
        } you have successfully bought a new ticket for ${movie_title}, here is the show info:</p>
        <div style="background-color: #f05454; color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3px 10px; font-weight: bold; border-radius: 5px;">
        <ul>
        <li style="color: #fff;">Movie: ${movie_title}</li>
        <li style="color: #fff;">Date: ${date}</li>
        <li style="color: #fff;">Time: ${time}</li>
        <li style="color: #fff;">Parking lot: ${parking_lot}</li>
        <li style="color: #fff;">${
          foundShow.extras[0] ? "Extras: " + foundShow.extras[0] : "No extras"
        }</li>
        </ul>
        </div>
        <img src="${img}">
        <p style="color: #000000">Show this e-mail at the entrance to access to the cinema, and the info above in the candy-bar.<br /><br />Ticket ID: <span style="font-weight: bold; text-decoration: underline;">${preference_id}</span><br /><br />All rights reserved by &copy; <a href="http://localhost:3000">Autocinema App</a></p>
        `, // html body
      });
    }
    res.send("Ok");
  } catch (error) {
    console.log(error);
  }
};

const getPayments = async (req, res) => {
  try {
    let result = await axios.get(
      "https://api.mercadopago.com/v1/payments/search?limit=1000",
      config
    );
    let mapped = result.data.results.map((el) => {
      return {
        id: el.id,
        email: el.additional_info.items
          ? el.additional_info.items[0].description
          : "",
        total: el.transaction_details.total_paid_amount,
        installments: el.installments, //cantidad de cuotas
        status: el.status,
        paidWith: el.payment_method_id,
        items: el.description,
        movie_title: el.additional_info.items
          ? el.additional_info.items[0].id
          : "",
      };
    });
    res.send(mapped);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  processPayment,
  updateBooking,
  getPayments,
};
