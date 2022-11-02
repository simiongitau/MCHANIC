const express = require("express");
const router = express.Router();
const {
  getAllServices,
  createServices,
  updateServices,
  DeleteServices,
} = require("../controler/service");

router.get("/api/services/getall", getAllServices);
router.post("/api/products/create", createServices);
router.delete("/api/products/delete/:id", DeleteServices);
router.patch("/api/products/update/:id", updateServices);

module.exports = router;
