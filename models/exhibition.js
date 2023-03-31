const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const Artwork = require("../models/artwork")

const exhibitionsSchema = new Schema(
  {
    exhibitionTitle: {
      type: String,
      required: true,
    },

    exhibitionTitleSub: {
      type: String,
      required: true,
    },

    exhibitionInformation: {
      type: String,
      required: true,
    },

    exhibitionStartDate: {
      type: Date,
      required: true,
    },

    exhibitionEndDate: {
      type: Date,
      required: true,
    },

    exhibitionEntry: {
      type: String,
      required: true,
    },

    exhibitionLocation: {
      address: {
        type: String,
        required: true,
      },
      floor: {
        type: Number,
        required: true,
      },
    },

    artworks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Artwork",
      },
    ],

    exhibitionComments: [exhibitionComments], // <- embedding comments from user
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const exhibitionCommentsSchema = new Schema({
  // user schema
});

module.exports = mongoose.model("Exhibition", exhibitionsSchema);
