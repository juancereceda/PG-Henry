const { Router } = require("express");
const router = Router();
const ProductRoutes = require("./Products/products");
const UserRoutes = require("./user/users");
const MoviesRoutes = require("./Movies/movies");
const PaymentRoutes = require("./Payment/payment");
const FeedbacksRoutes = require("./Feedbacks/feedbacks");

router.use("/users", UserRoutes);
router.use("/products", ProductRoutes);
router.use("/movies", MoviesRoutes);
router.use("/payment", PaymentRoutes);
router.use("/feedbacks", FeedbacksRoutes);

module.exports = router;
