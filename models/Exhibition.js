const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comments: {
      type: Array,
      trim: true,
      required: true,
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
    },

    exhibitionTitleSub: {
      type: String,
      required: true,
    },
    
    exhibitionDescription: {
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

    exhibitionImage: {
      type: String,
      required: true,
    },
    
    // exhibitionLocation: {
    //   type: Schema.Types.ObjectId, 
    //   ref: "Location",
    // },

    artworks: [
      {
        type: Schema.Types.ObjectId, 
        ref: "Artwork",
      },
    ],
    exhibitionComments: [commentSchema] // <- embedding comments from user
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
