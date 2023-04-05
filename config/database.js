// const mongoose = require("mongoose");

// mongoose.connection.on("error", (err) =>
//   console.log(err.message + " is Mongod not running?")
// );
// mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// const DATABASE_URL = process.env.DATABASE_URL;

// mongoose.connect(DATABASE_URL);

// mongoose.connection.once("open", () => {
//   console.log("Connected to mongoose...at "+DATABASE_URL);
// });

const mongoose = require("mongoose");

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

const DATABASE_URL = process.env.DATABASE_URL;

const connect = () => {
  mongoose.connect(DATABASE_URL);
  mongoose.connection.once("open", () => {
    console.log("Connected to mongoose...at " + DATABASE_URL);
  });
};

module.exports = { connect };
