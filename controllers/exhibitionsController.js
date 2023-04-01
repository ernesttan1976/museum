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

// const seed = async (req, res) => {
//   try {
//     await Holiday.deleteMany({});

//     const holidays = await Holiday.create([
//       { name: "World Kindness" },
//       { name: "Spicy Hermit Cookie" },
//       { name: "Lost Sock Memorial" },
//       { name: "Bathtub Party" },
//       { name: "Zipper" },
//       { name: "Test Delete Route" },
//     ]);
//     res.status(201).json(holidays);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };



// const deleteHoliday = async (req, res) => {
//   try {
//     const deletedHoliday = await Holiday.findByIdAndDelete(req.params.id);
//     res.status(200).json(deletedHoliday);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const show = async (req, res) => {
//   try {
//     const holiday = await Holiday.findById(req.params.id);
//     res.status(200).json(holiday);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const update = async (req, res) => {
//   try {
//     const updatedHoliday = await Holiday.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json(updatedHoliday);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = {
  create,
//   seed,
  index,
//   delete: deleteHoliday,
//   show,
//   update,
};