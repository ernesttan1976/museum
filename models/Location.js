const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationsSchema = new Schema(
  {
    floor: {
        type: String,
        enum: ['B1','L1','L2','L3','L4','L5','L6'],
        default: 'L1'
      },
    unit: {
        type: Number,
        required: true,
        min: 1,
        max: 20,
        validate: {
          validator: Number.isInteger,
          message: '{VALUE} is not an integer.'
        }
    }
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

module.exports = mongoose.model("Location", locationsSchema);
