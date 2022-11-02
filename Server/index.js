// instiallizing our express
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//mongoose

const userRoute = require("./routes/user");
const messageRoute = require("./routes/message");
const productRoute = require("./routes/product");
const serviceRoute = require("./routes/service");
// const companyRoute = require("./routes/company");

mongoose
  .connect("mongodb://127.0.0.1:27017/autogarage")
  // .connect("mongodb://0.0.0.0:27017")
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));
app.use(cors());
app.use(express.json());

app.use(userRoute);
app.use(messageRoute);
app.use(productRoute);
app.use(serviceRoute);

app.listen(5000, () => console.log("server running at port 5000"));
