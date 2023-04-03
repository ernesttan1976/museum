const Exhibition = require("../models/Exhibition");
require("../models/Artwork");

const index = async (req, res) => {
    try {
      const foundExhibition = await Exhibition.find({});
      res.status(200).json(foundExhibition);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

const create = async (req, res) => {
  try {
    const createdExhibition = await Exhibition.create(req.body);
    res.status(201).json(createdExhibition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const seed = async (req, res) => {
  try {
    await Exhibition.deleteMany({});

    const seedExhibitions = require('../database-seed/exhibitions-seed.json'); 
    console.log(seedExhibitions);

    const exhibitions = await Exhibition.create(seedExhibitions);
    res.status(200).json(exhibitions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteExhibition = async (req, res) => {
  try {
    const deletedExhibition = await Exhibition.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedExhibition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const exhibition = await Exhibition.findById(req.params.id).populate("artworks");
    res.status(200).json(exhibition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updatedExhibition = await Exhibition.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedExhibition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  create,
  seed,
  index,
  delete: deleteExhibition,
  show,
  update,
};