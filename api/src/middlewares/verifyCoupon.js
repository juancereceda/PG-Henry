const Coupon = require("../models/Coupon");
const User = require("../models/User");

const validateCoupon = async (req, res, next) => {
  try {
    const { couponCode, date } = req.body;
    const userFound = await User.findById(req.userId);
    const couponFound = await Coupon.findOne({ couponCode });
    if (!couponCode || !couponFound) {
      return res.status(404).send({ message: "Coupon not found" });
    }
    if (couponCode === "FIRST-BOOKING-2021") {
      if (userFound.bookings.length > 0) {
        return res
          .status(400)
          .send({ message: "You have already made your first booking!" });
      } else {
        req.couponDiscount = couponFound.discount;
        next();
      }
    }
    if (!couponFound.dates.includes(date)) {
      return res
        .status(400)
        .send({ message: "This coupon is not available for the day selected" });
    }
    req.couponDiscount = couponFound.discount;
    next();
  } catch (error) {
    res.status(400).send({ message: "Coupon is not valid" });
  }
};

module.exports = {
  validateCoupon,
};
