const { Router } = require("express");
const router = Router();
const couponCtrl = require("../../controllers/coupon.controller");
const authentication = require("../../middlewares/authentication");
const verifyCoupon = require("../../middlewares/verifyCoupon");

router.post(
  "/validate",
  [authentication.verifyToken, verifyCoupon.validateCoupon],
  couponCtrl.getCoupon
);
router.get("/", couponCtrl.getCoupons);
router.post(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  couponCtrl.addCoupons
);

module.exports = router;
