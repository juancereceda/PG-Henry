const Coupon = require("../models/Coupon");
const User = require("../models/User");

const getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.send(coupons);
  } catch (error) {
    console.log(error);
  }
};

const getCoupon = async (req, res) => {
  try {
    return res.send({ message: req.couponDiscount });
  } catch (error) {
    console.log(error);
  }
};

const addCoupons = async (req, res) => {
  try {
    const { name, discount, dates, couponCode, image } = req.body;
    const newCoupon = await new Coupon({
      name,
      discount,
      dates,
      couponCode,
      image,
    });
    const couponSaved = await newCoupon.save();
    res.send(couponSaved);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getCoupons,
  addCoupons,
  getCoupon,
};
