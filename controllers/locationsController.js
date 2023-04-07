const Location = require("../models/Location");

const index = async (req, res) => {
    try {
      const foundLocation = await Location.find({}).populate('exhibitions').populate('artworks');
      res.status(200).json(foundLocation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const create = async (req, res) => {
    try {
      const location = new Location(req.body);
      const errors = location.validateSync();
      if (errors) {
        throw new Error(errors);
      }
      const createdLocation = await location.save();
      res.status(201).json(createdLocation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

// const create = async (req, res) => {
//   try {
//     const createdLocation = await Location.create(req.body);
//     res.status(201).json(createdLocation);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const deleteLocation = async (req, res) => {
  try {
    const deletedLocation = await Location.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLocation);
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
    const location = await Location.findById(req.params.id);
    if (!location) {
      throw new Error("Location not found");
    }
    location.set(req.body);
    const errors = location.validateSync();
    if (errors) {
      throw new Error(errors);
    }
    const updatedLocation = await location.save();
    res.status(200).json(updatedLocation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  create,
  index,
  delete: deleteLocation,
//   show,
  update,
};