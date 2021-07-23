const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: String,
    date: String,
    poster: String,
    trailer: String,
    description: String,
    genre: String,
    onBillboard: Boolean,
    shows: Array,
    cast: String,
    rated: String,
    runtime: String,
    director: String,
    IMDb: Number, 
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Movie", MovieSchema);
