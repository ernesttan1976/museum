const Explorer = require("../models/Explorer");

const index = async (req, res) => {
  try {
    const foundExplorer = await Explorer.find({});
    res.status(200).json(foundExplorer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const from = req.params.from;
    const to = req.params.to;

    function findRoute(from, to){

      if (from==="XXX" && to==="YYY"){
        result = {
          fromMapUrl: "AAA.png",
          toMapUrl: "BBB.png",
          steps: [ObjectId]
        }
      }

      return result
    }

    res.status(200).json(foundExplorer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  index,
  show,
};
