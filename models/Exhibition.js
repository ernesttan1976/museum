const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comments: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const exhibitionsSchema = new Schema(
  {
    exhibitionTitle: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 50,
    },

    exhibitionTitleSub: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 50,
    },

    exhibitionDescription: {
      type: String,
      required: true,
      trim: true,
      minlength: 50,
      maxlength: 300,
    },

    exhibitionInformation: {
      type: String,
      required: true,
      trim: true,
      minlength: 200,
      maxlength: 1500,
    },

    exhibitionStartDate: {
      type: Date,
      required: true,
      min: Date.now,
    },

    exhibitionEndDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value > this.exhibitionStartDate;
        },
        message: "Exhibition end date must be after exhibition start date",
      },
    },

    exhibitionEntry: {
      type: String,
      required: true,
    },

    exhibitionImage: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Regular expression to match URLs ending with common image file extensions
          var regex = /\.(jpg|jpeg|gif|png|bmp)$/i;
          return regex.test(value);
        },
        message: "Please provide a valid image URL",
      },
    },

    exhibitionLocation: {
      type: String,
      required: true,
    },

    exhibitionFloor: {
      type: String,
      enum: ["B1", "L1", "L2", "L3", "L4", "L5", "L6"],
      required: true,
    },
    artworks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Artwork",
      },
    ],
    exhibitionComments: [commentSchema],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Exhibition", exhibitionsSchema);
