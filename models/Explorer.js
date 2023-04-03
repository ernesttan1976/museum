const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const explorerSchema = new Schema(
  {
    directions: {
      type: String,
      required: true,
    },

    explorerPrompt: {
      type: String,
      required: true,
    },

    featureUrl: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: true,
    },

    imgUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const artworkCommentsSchema = new Schema({
  // user schema
});

module.exports = mongoose.model("Explorer", explorerSchema);
