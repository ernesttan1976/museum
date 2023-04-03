const Exhibition = require("../models/Exhibition");

// async function index(req, res) {
//   try {
//     const id = req.params.id;
//     const exhibition = await Exhibition.findById(id);
//     res.status(200).json(exhibition);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// }

async function createComment(req, res, next) {
  try {
    const id = req.params.id;
    const exhibition = await Exhibition.findById(id);
    exhibition.exhibitionComments.push(req.body);
    await exhibition.save();
    res.status(200).json(exhibition);
    console.log(exhibition.exhibitionComments);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

// async function deleteComment (req, res) {
//   try {
//     const bookId = req.params.bookId;
//     const thoughtId = req.params.thoughtId;
//     const book = await Book.findById(bookId);
//     const foundThought = book.thoughts.find(
//       (thought) => thought._id.toString() === thoughtId
//     );
//     foundThought.deleteOne(thoughtId);
//     await book.save();
//     res.redirect(`/books/${bookId}/edit/#thoughts`);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server Error");
//   }
// }

module.exports = {
    // index,
  create: createComment,
  //delete: deleteComment,
};
