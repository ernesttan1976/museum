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
      type: Schema.Types.ObjectId, 
      ref: "Location",
    },

    // embedded comments for user
    // artworkComments: [artworkComments],
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

module.exports = mongoose.model("Artwork", artworkSchema);
