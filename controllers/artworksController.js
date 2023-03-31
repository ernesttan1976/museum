const Artwork = require("../models/Artwork");

const create = async (req, res) => {
  try {
    const createdArtwork = await Artwork.create(req.body);
    res.status(200).send(createdArtwork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const index = async (req, res) => {
  try {
    const foundArtwork = await Artwork.find({});
    res.status(200).send(foundArtwork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteArtwork = async (req, res) => {
  try {
    const deletedArtwork = await Artwork.findByIdAndRemove(req.params.id);
    res.status(200).send(deletedArtwork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    res.status(200).send(artwork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedArtwork = await Artwork.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updatedArtwork);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  index,
  delete: deleteArtwork,
  show,
  update,
};