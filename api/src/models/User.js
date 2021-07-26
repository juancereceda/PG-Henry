const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    isAdmin: Boolean,
    bookings: Array,
    banned: Boolean,
    resetPassword: Boolean,
    firstBooking: Boolean,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.validatePassword = async function (password, newPassword) {
  return await bcrypt.compare(password, newPassword);
};

module.exports = model("User", UserSchema);
