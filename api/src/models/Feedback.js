const { Schema, model } = require("mongoose");

const FeedbackSchema = new Schema({
    author: String,
    text: String,
    visible: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = model("Feedback", FeedbackSchema);