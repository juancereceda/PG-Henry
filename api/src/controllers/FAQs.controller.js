const User = require("../models/User");
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "autocinehenry@gmail.com", // generated ethereal user
    pass: "ykxotzanjxikdvjt", // generated ethereal password
  },
});

const contactAdministration = async (req, res) => {
  try {
    const { subject, name, email, phone, message } = req.body;
    transporter.sendMail({
      from: '"AutoCine Henry 🎥" <autocinehenry@gmail.com>', // sender address
      to: "autocinehenry@gmail.com", // list of receivers
      subject, // Subject line
      html: `
        <h4>This is a message sent by ${name}</h4>
        <h4>His/her email: ${email}</h4>
        <h4>His/her phone number: ${phone}</h4>
        <span>Message: "${message}"</span>
        <br/><br/>All rights reserved by &copy; <a href="http://localhost:3000">Autocinema App</a></p>
        `, // html body
    });
    return res.send({ message: "Email sent" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  contactAdministration,
};
