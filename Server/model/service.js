const mongoose = require("mongoose");

// schema
// document,collection,database
const servicesSchema = mongoose.Schema({
  // object describing the shape of document
  // includig validation

  Image: {
    type: String,
  },
  Title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
// model is used to store data in database
const Services = mongoose.model("Services", servicesSchema);
// exporting
module.exports = Services;
