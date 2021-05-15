const mongoose = require("mongoose");
const ContactSchema = new mongoose.Schema({
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
      "Suject can not be more than 1000 characters please summarize your message",
    ],
  },
});

// const Contact = mongoose.model("Contact", contactSchema);
// export default Contact;

module.exports =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
//
