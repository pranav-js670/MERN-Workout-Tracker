require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const workoutroutes = require("./routes/workouts");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutroutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to Databse and Server is listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
