const { Router } = require("express");
const router = Router();
const paymentCtrl = require("../../controllers/payment.controller");
const authentication = require("../../middlewares/authentication");

router.post("/", authentication.verifyToken, paymentCtrl.processPayment);
router.get(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  paymentCtrl.getPayments
);
module.exports = router;
