const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artworkSchema = new Schema(
  {
    artworkUrl: {
      type: String,
      required: true,
    },

    artistName: {
      type: String,
      required: true,
    },

    artworkTitle: {
      type: String,
      required: true,
    },

    artworkYear: {
      type: Number,
      required: true,
    },

    artworkMedium: {
      type: String,
    },

    artworkDimension: {
      type: String,
    },

    artworkInformation: {
      type: String,
    },

    artworkLocation: {
      type: String,
      required: true,
    },

    artworkFloor: {
      type: String,
      enum: ["B1", "L1", "L2", "L3", "L4", "L5", "L6"],
      default: "L1",
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


module.exports = mongoose.model("Artwork", artworkSchema);
