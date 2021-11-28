const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const blogRoute = require("./routes/blogs/blog");
const coopRoute = require("./routes/coops/coop");
const eventsRoute = require("./routes/events/event");
const loansRoute = require("./routes/loans/loan");
const notificationsRoute = require("./routes/notifications/notification");
const poolsRoute = require("./routes/pools/pool");
const usersRoute = require("./routes/users/user");
const walletsRoute = require("./routes/wallets/wallet");

const app = express();
dotenv.config();

mongoose
  .connect(process.env.DB_CONNECT_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to coop DBase!");
  })
  .catch((error) => {
    console.log("Unable to connect to coop Dbase!");
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// // middlewares
app.use("/api/blog", blogRoute);
app.use("/api/group", coopRoute);
app.use("/api/user", usersRoute);
app.use("/api/event", eventsRoute);
app.use("/api/loan", loansRoute);
app.use("/api/notification", notificationsRoute);
app.use("/api/pool", poolsRoute);
app.use("/api/wallet", walletsRoute);

module.exports = app;
