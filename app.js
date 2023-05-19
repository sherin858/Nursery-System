const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const teacherRoutes = require("./routes/teacher.router");
const childRoutes = require("./routes/child.router");
const classRoutes = require("./routes/class.router");
const homeRoutes = require("./routes/home.router");
const userAuth = require("./middlewares/user.auth");
const server = express();
mongoose
  .connect("mongodb://127.0.0.1:27017/ITI")
  .then(() => {
    console.log("DB connected...");
    server.listen(8080, () => {
      console.log("Server Started...");
    });
  })
  .catch((error) => {
    console.log("DB problem " + error);
  });

server.use(morgan("dev"));
server.use(express.json());
//routes
server.use(homeRoutes);
server.use(userAuth);
server.use(teacherRoutes);
server.use(childRoutes);
server.use(classRoutes);

//not found
server.use((req, res) => {
  res.status(404).json({ message: "Page not Found" });
});

//error
server.use((error, req, res, next) => {
  res.status(500).json({ message: " exception : " + error });
});
