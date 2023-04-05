const mongoose = require("mongoose");
// const validator = require("validator");
const bcrypt = require("bcrypt");

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      trim: true,
      minLength: 5,
      required: true,
    },
    userRole: {
      type: String,
      required: true,
      enum: ["user", "admin"]
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// usersSchema.virtual("createdAtFormatted").get(function () {
//   // to convert date into cleaner form
//   return this.created_at.toLocaleString("en-UK");
// });

// usersSchema.virtual("updatedAtFormatted").get(function () {
//   return this.updated_at.toLocaleString("en-UK");
// });

usersSchema.pre("save", async function (next) {
  // 'this' is the user doc
  if (!this.isModified("password")) return next();
  // update the password with the computed hash pw
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

usersSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret["password"];
    return ret;
  },
});

module.exports = mongoose.model("User", usersSchema);