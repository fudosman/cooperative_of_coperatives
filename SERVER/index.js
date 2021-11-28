const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const dotenv = require("dotenv");
const postRoute = require("./routes/posts");
const orders = require("./routes/orders");
const crud = require("./routes/crud");
const app = express();

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB hotelOrders!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB hotelOrders!");
    console.error(error);
  });

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
  // for parsing application/json
  app.use(express.json());

  // for parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true })) ;

// middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/orders", orders);
app.use("/api/crud", crud);


module.exports = app;
