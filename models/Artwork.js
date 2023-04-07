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
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{4}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid 4-digit year!`,
      },
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
