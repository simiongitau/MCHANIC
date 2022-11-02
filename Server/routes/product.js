const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProducts,
  updateProducts,
  DeleteProducts,
} = require("../controler/product");

router.get("/api/products/getall", getAllProducts);
router.post("/api/products/create", createProducts);
router.delete("/api/products/delete/:id", DeleteProducts);
router.patch("/api/products/update/:id", updateProducts);

module.exports = router;
