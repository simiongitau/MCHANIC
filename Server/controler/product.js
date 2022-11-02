const Products = require("../model/product");

exports.getAllProducts = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const products = await Products.find();
  if (!products) {
    return res.status(404).json({
      success: false,
      message: "no new products",
    });
  }
  return res.json({
    success: true,
    data: products,
  });
};

exports.createProducts = async (req, res) => {
  try {
    const products = new Products(req.body);
    console.log(products);
    await products.save();
    return res.status(200).json({ success: true, products });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateProducts = async (req, res, next) => {
  // Verifying if role and id is presnt
  // Verifying if the value of role is admin

  try {
    const products = await Products.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // condition if use exist
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "products does not exist",
      });
    }
    return res.json({ success: true, products });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

exports.DeleteProducts = async (req, res) => {
  try {
    const products = await Products.findByIdAndDelete(req.params.id);
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "products does not exist",
      });
    }
    return res.json({ success: true, messages });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
