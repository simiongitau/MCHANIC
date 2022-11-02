const mongoose = require("mongoose");

// schema
// document,collection,database
const productsSchema = mongoose.Schema({
  // object describing the shape of document
  // includig validation

  Image: {
    type: String,
  },
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
});
// model is used to store data in database
const Products = mongoose.model("Products", productsSchema);
// exporting
module.exports = Products;
