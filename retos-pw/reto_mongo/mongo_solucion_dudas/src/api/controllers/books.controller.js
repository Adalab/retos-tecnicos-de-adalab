const Book = require('../models/book.model');
const Author = require('../models/author.model');
const getAllBooks = async (req, res) => {
  //lleno la funcion
  const books = await Book.find().populate('authors');
  res.json(books);
};
const add = () => {
  //lleno la funcion
};
const update = () => {
  /*const updateBook = Book.findByIdAndUpdate(
        id,
        {datos del autor},
        {new:true}
    )*/
};
module.exports = { getAllBooks, add };
