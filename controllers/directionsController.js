const Directions = require("../models/Directions");
require("../models/Explorer");

const index = async (req, res) => {
  try {
    const foundDirections = await Directions.findById(
      "642bb5bf350c1b20a4cdb627"
    ).populate("routeDirections");
    res.status(200).json(foundDirections);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const from = req.params.from;
    const to = req.params.to;

    function findRoute(from, to) {
      if (
        from === "6425c260c9d195369ec02476" &&
        to === "6425ba0ac9d195369ec02461"
      ) {
        result = {
          fromMapUrl: "AAA.png",
          toMapUrl: "BBB.png",
          steps: "642bb5bf350c1b20a4cdb627", // Object ID of Route A
        };
      } else {
        result = "no path";
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
  index,
  show,
};

// const show = async (req, res) => {
//   try {
//     const from = req.params.from;
//     const to = req.params.to;

//     function findRoute(from, to) {
//       if (
//         from === "exhibition A object ID " &&
//         to === "exhibition B object ID"
//       ) {
//         result = {
//           fromMapUrl: "AAA.png",
//           toMapUrl: "BBB.png",
//           steps: [ObjectId], // Object ID of Route A
//         };
//       } else if (
//         from === "exhibition A object ID " &&
//         to === "exhibition C object ID"
//       ) {
//         result = {
//           fromMapUrl: "AAA.png",
//           toMapUrl: "CCC.png",
//           steps: [ObjectId], // Object ID of Route B
//         };
//       }

//       return result;
//     }

//     res.status(200).json({ from });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
