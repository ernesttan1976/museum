const Directions = require("../models/Directions");
require("../models/Explorer");

const show = async (req, res) => {
  try {
    const from = req.params.from;
    const to = req.params.to;

    function findRoute(from, to) {
      if (
        from === "6425c260c9d195369ec02476" &&
        to === "6425c854c9d195369ec02494"
      ) {
        result = {
          fromMapUrl: "EXHIBITION Between Declarations and Dreams L1",
          toMapUrl: "EXHIBITION Siapa Nama Kamu B1",
          steps: "642bb5bf350c1b20a4cdb627", // Object ID of Route A
        };
      } else if (
        from === "6425c260c9d195369ec02476" &&
        to === "6430ab5e625b2ad2b95f96ab"
      ) {
        result = {
          fromMapUrl: "EXHIBITION Between Declarations and Dreams L2",
          toMapUrl: "EXHIBITION As We See It L3",
          steps: "642e2ff3e64813ab8c55a0ca", // Object ID of Route B
        };
      } else {
        result = {
          steps: "64305ed5cf61dfb8fdd221cc",
        };
      }

      return result;
    }

    const routeAnswer = findRoute(from, to).steps;

    console.log("this result " + routeAnswer);

    const foundDirections = await Directions.findById(routeAnswer).populate(
      "routeDirections"
    );
    res.status(200).json(foundDirections);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
};
