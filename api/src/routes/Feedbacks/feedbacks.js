const { Router } = require("express");
const feedbackCtrl = require('../../controllers/feedback.controller');
const router = Router();

// Get
router.get("/visibles", feedbackCtrl.getVisiblesFeedbacks);
router.get("/", feedbackCtrl.getFeedbacks);

// Post
router.post("/", feedbackCtrl.postFeedback);

// Put
router.put("/", feedbackCtrl.putVisibilityFeedback);

// Delete
router.delete("/", feedbackCtrl.deleteFeedback);






module.exports = router;