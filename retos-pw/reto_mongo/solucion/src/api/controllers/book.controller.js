const Book = require('../models/book.model');
const Author = require('../models/author.model');

const addBook = async (req, res) => {
  try {
    const { title, genre, year, authors } = req.body;
    const newBook = new Book({ title, genre, year, authors });
    const findBook = await Book.find({ title: req.body.title });
    if (findBook.length !== 0) {
      return res.json({ message: 'Esta ya está registrada' });
    }
    const createdBook = await newBook.save();

    return res.json(createdBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//relaciones
const selectBook = async (req, res) => {
  const books = await Book.find().populate('authors');
  return res.status(200).json(books);
};
const selectOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const findBook = await Book.findById(id).populate('authors');

    return res.status(200).json(findBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const updateBook = async (req, res) => {
  try {
    const { title, genre, year, authors } = req.body;
    const { id } = req.params;
    console.log(id);
    const updateBook = await Book.findByIdAndUpdate(
      id,
      { title, genre, year, authors },
      {
        new: true,
      }
    );

    if (!updateBook) {
      return res.status(404).json({ message: 'Book no existe' });
    }
    return res.status(200).json(updateBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const deleteOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBook = await Book.findByIdAndDelete(id);
    console.log('se ha eliminado');
    if (!deleteBook) {
      return res.status(404).json({ message: 'libro no existe' });
    }
    return res.status(200).json(deleteBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  addBook,
  selectBook,
  selectOneBook,
  updateBook,
  deleteOneBook,
};
