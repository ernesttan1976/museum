const Exhibition = require("../models/Exhibition");

async function createComment(req, res, next) {
  try {
    const id = req.params.id;
    const exhibition = await Exhibition.findById(id).populate("artworks");
    const comment = req.body;
    exhibition.exhibitionComments.push(comment);
    await exhibition.save();
    res.status(200).json(exhibition);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  create: createComment,
};