const express = require("express");
const dotEnv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const expressjwt = require("express-jwt");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(express.json({ limit: "100mb" }));
app.use(morgan("dev"));
app.use(cors());
app.use(
  expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["sha1", "RS256", "HS256"],
    credentialsRequired: true,
  }).unless({
    path: ["/api/auth/"],
  }),
  (err, req, res, next) => {
    //console.log(err);
    next();
  }
);

app.use(express.static(path.resolve(__dirname, "dist", "client")));

// Load All routes here
const adminRoute = require("./server/routes/Admin.route");
const customerRoute = require("./server/routes/Customer.route");
const vehicleRoute = require("./server/routes/Vehicle.route");
const hireRoute = require("./server/routes/Hire.route");
const transactionRoute = require("./server/routes/Transaction.route");
const manufacturerRoute = require("./server/routes/VehicleManufacturer.route");
const vehicleTypeRoute = require("./server/routes/VehicleType.route");
const authRoute = require("./server/routes/Auth.route");
const notificationRoute = require("./server/routes/Notification.route");
const commonRoute = require("./server/routes/Common.route");

// configure routes
app.use("/api/", adminRoute);
app.use("/api/", customerRoute);
app.use("/api/", vehicleRoute);
app.use("/api/", hireRoute);
app.use("/api/", transactionRoute);
app.use("/api/", manufacturerRoute);
app.use("/api/", vehicleTypeRoute);
app.use("/api/", authRoute);
app.use("/api/", notificationRoute);
app.use("/api/", commonRoute);

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve(__dirname, "dist", "client", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on PORT: ${process.env.PORT}`)
);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
