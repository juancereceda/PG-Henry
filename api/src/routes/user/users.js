const { Router } = require("express");
const router = Router();
const UserCtrl = require("../../controllers/user.controller");
const PaymentCtrl = require("../../controllers/payment.controller");
const verifySignup = require("../../middlewares/verifySignup");
const verifyLogin = require("../../middlewares/verifyLogin");
const authentication = require("../../middlewares/authentication");

router.post("/signup", [verifySignup.checkEmailAndPassword], UserCtrl.signUp);
router.post("/login", [verifyLogin.checkUser], UserCtrl.logIn);
router.get("/verifyadmin", [authentication.verifyToken], UserCtrl.verifyAdmin);
router.get(
  "/bookings/:id",
  [authentication.verifyToken],
  UserCtrl.getBookingById
);
router.get("/bookings", [authentication.verifyToken], UserCtrl.getBookings);
router.get(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  UserCtrl.getUsers
);

router.get(
  "/:id",
  [authentication.verifyToken, authentication.isAdmin],
  UserCtrl.getUsers
);

router.put(
  "/bookings",
  [authentication.verifyToken],
  PaymentCtrl.updateBooking
);

router.put(
  "/restorepassword",
  [authentication.verifyToken],
  UserCtrl.restorePassword
);
router.put(
  "/:id",
  [authentication.verifyToken, authentication.isAdmin],
  UserCtrl.putUser
);

router.post("/verifyuser", UserCtrl.verifyUser);
router.post("/verifytoken", UserCtrl.verifyToken);
router.delete(
  "/deleteAccount",
  authentication.verifyToken,
  UserCtrl.deleteUserAccount
);
router.post(
  "/google_signup",
  [verifySignup.verifyGoogleToken],
  UserCtrl.signUp
);
router.post(
  "/google_login",
  [verifySignup.verifyGoogleToken, verifyLogin.checkUser],
  UserCtrl.logIn
);

module.exports = router;
