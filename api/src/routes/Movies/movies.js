const { Router } = require("express");
const movieCtrl = require("../../controllers/movie.controller");
const authentication = require("../../middlewares/authentication");
const router = Router();

router.get("/:id", movieCtrl.getMovieById);
router.post("/", [authentication.verifyToken, authentication.isAdmin], movieCtrl.postMovie);
router.put("/updateShow", [authentication.verifyToken, authentication.isAdmin], movieCtrl.updateShow);
router.put("/:id", [authentication.verifyToken, authentication.isAdmin], movieCtrl.putMovie);
router.get("/", movieCtrl.getMovies);
// router.get("/genre", movieCtrl.getMovieByGenre);

module.exports = router;

