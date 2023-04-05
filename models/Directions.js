const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const directionsSchema = new Schema(
  {
    route: {
      type: String,
      required: true,
    },

    mapImg: {
      type: Array,
      required: true,
    },

    routeDirections: [
      {
        type: Schema.Types.ObjectId,
        ref: "Explorer",
      },
    ],
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

module.exports = mongoose.model("Directions", directionsSchema);
