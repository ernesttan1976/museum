const Exhibition = require("../models/Exhibition");

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

const deleteExhibition = async (req, res) => {
  try {
    const deletedExhibition = await Exhibition.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedExhibition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const show = async (req, res) => {
//   try {
//     const holiday = await Holiday.findById(req.params.id);
//     res.status(200).json(holiday);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

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
//   seed,
  index,
  delete: deleteExhibition,
//   show,
  update,
};