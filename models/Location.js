const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationObjectsSchema = new Schema({
  type: {
    type: String,
    enum: ["Exhibitions", "Artworks", "Shop & Dine", "Amenities"],
    default: "Artworks"
  },
  exhibitionId: {
    type: Schema.Types.ObjectId,
    ref: "Exhibition",
  },
  artworkId: {
    type: Schema.Types.ObjectId,
    ref: "Artwork",
  },
  name: String,
})

const unitsSchema = new Schema({
  unit: {
    type: Number,
    required: true,
    min: 1,
    max: 20,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer.'
    }
  },
  objects: [locationObjectsSchema],
})

const locationsSchema = new Schema(
  {
    floor: {
      type: String,
      enum: ['B1', 'L1', 'L2', 'L3', 'L4', 'L5', 'L6'],
      default: 'L1'
    },
    units: [unitsSchema],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Location", locationsSchema);
