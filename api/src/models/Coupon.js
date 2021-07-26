const { Schema, model } = require("mongoose");

const CouponSchema = new Schema(
  {
    name: String,
    discount: Number,
    dates: Array,
    couponCode: {
      type: String,
      unique: true,
    },
    image: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Coupon", CouponSchema);
