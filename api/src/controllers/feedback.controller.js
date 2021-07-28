const Feedback = require("../models/Feedback");

// ~~~~~~~~~~ GET ~~~~~~~~~~

const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    return res.json(feedbacks.reverse());
  } catch (error) {
    console.log(error);
  }
};

const getVisiblesFeedbacks = async (req, res) => {
  try {
    const visiblesFeedbacks = await Feedback.find({ visible: true });
    return res.send(visiblesFeedbacks);
  } catch (error) {
    console.log(error);
  }
};
// ~~~~~~~~~~ END GET ~~~~~~~~~~

// ~~~~~~~~~~ POST ~~~~~~~~~~

const postFeedback = async (req, res) => {
  try {
    const { author, text } = req.body;
    if (!author || !text)
      return res.status(400).json({ message: "Author and text is required" });
    const feedback = await new Feedback({
      author,
      text,
    });
    const feedbackSaved = await feedback.save();
    res.status(201).send(feedbackSaved);
  } catch (error) {
    console.log(error);
  }
};

// ~~~~~~~~~~ END POST ~~~~~~~~~~

// ~~~~~~~~~~ PUT ~~~~~~~~~~

const putVisibilityFeedback = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) return res.status(404).json({ error: "Feedback ID not provided" });

    const feedback = Feedback.findOne({ _id: id }, (_, feedback) => {
      feedback.visible = !feedback.visible;
      feedback.save();
    });

    if (!feedback)
      return res.status(404).json({ message: "Feedback not found" });

    return res.json({ message: `Feedback ID: ${id} modified succesfully` });
  } catch (error) {
    console.log(error);
  }
};

// ~~~~~~~~~~ END PUT ~~~~~~~~~~

// ~~~~~~~~~~ DELETE ~~~~~~~~~~
const deleteFeedback = async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    return res.json({
      message: `Feedback ID ${req.params.id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};

// ~~~~~~~~~~ END DELETE ~~~~~~~~~~

module.exports = {
  getFeedbacks,
  getVisiblesFeedbacks,
  postFeedback,
  putVisibilityFeedback,
  deleteFeedback,
};
