const Explorer = require("../models/Explorer");

const index = async (req, res) => {
  try {
    const foundExplorer = await Explorer.find({});
    res.status(200).json(foundExplorer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  index,
};
