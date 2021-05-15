const mongoose = require("mongoose");
const ContactSchema = new mongoose({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: Number,
    required: [true, "Please enter your number"],
  },

  subject: {
    type: String,
    required: [true, "Please enter your name"],
    maxlength: [50, "Suject can not be more than 50 characters"],
  },
  message: {
    type: String,
    required: [true, "Please enter your Message here"],
    maxlength: [
      1000,
      "Suject can not be more than 1000 characters please summarize",
    ],
  },
});

module.exports =
  mongoose.models.Contact || mongoose.Model("Contact", ContactSchema);
