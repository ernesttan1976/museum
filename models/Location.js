const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema(
  {
    floor: {
      type: String,
      enum: ['B1', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
      default: 'L1'
    },
    exhibitions: [
      {
        type: Schema.Types.ObjectId, 
        ref: "Exhibition",
      },
    ],
    artworks: [
      {
        type: Schema.Types.ObjectId, 
        ref: "Artwork",
      },
    ],
    shopanddine: [
      {
        type: String, 
      },
    ],
    amenities: [
      {
        type: String, 
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

module.exports = mongoose.model("Location", locationsSchema);






