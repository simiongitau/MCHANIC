const mongoose = require("mongoose");

// schema
// document,collection,database
const messagesSchema = mongoose.Schema({
  // object describing the shape of document
  // includig validation

  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
  },
  comments: {
    type: String,
    required: true,
  },
});
// model is used to store data in database
const Messages = mongoose.model("Messages", messagesSchema);
// exporting
module.exports = Messages;
