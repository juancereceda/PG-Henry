const { Router } = require("express");
const feedbackCtrl = require("../../controllers/feedback.controller");
const router = Router();
const authentication = require("../../middlewares/authentication");

// Get
router.get("/visibles", feedbackCtrl.getVisiblesFeedbacks);
router.get(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  feedbackCtrl.getFeedbacks
);

// Post
router.post("/", [authentication.verifyToken], feedbackCtrl.postFeedback);

// Put
router.put(
  "/",
  [authentication.verifyToken, authentication.isAdmin],
  feedbackCtrl.putVisibilityFeedback
);

// Delete
router.delete(
  "/:id",
  [authentication.verifyToken, authentication.isAdmin],
  feedbackCtrl.deleteFeedback
);

module.exports = router;
