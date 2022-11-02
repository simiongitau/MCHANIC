const express = require("express");
const router = express.Router();
const {
  getAllMessages,
  createMessages,
  DeleteMessages,
} = require("../controler/message");

router.get("/api/message/getall", getAllMessages);
router.post("/api/message/create", createMessages);
router.delete("/api/messages/delete/:id", DeleteMessages);

module.exports = router;
