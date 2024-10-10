const Author = require('../models/author.model');

const addAuthor = async (req, res) => {
  try {
    console.log(req.body);
    const newAuthor = new Author(req.body);
    const findAuthor = await Author.find({ name: req.body.name });
    console.log(findAuthor.length);
    if (findAuthor.length !== 0) {
      return res.json({ message: 'Esta ya está registrada' });
    }
    const createdAuthor = await newAuthor.save();
    return res.json(createdAuthor);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//relaciones
const selectAuthor = async (req, res) => {
  const Authors = await Author.find();
  return res.status(200).json(Authors);
};

const selectOneAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const findAuthor = await Author.findById(id);
    return res.status(200).json(findAuthor);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const AuthorBody = new Author(req.body);
    AuthorBody._id = id;
    const updateAuthor = await Author.findByIdAndUpdate(id, AuthorBody, {
      new: true,
    });
    console.log(updateAuthor);
    if (!updateAuthor) {
      return res.status(404).json({ message: 'Author no existe' });
    }
    return res.status(200).json(updateAuthor);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
const deleteAuthor = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteAuthor = await Author.findByIdAndDelete(id);
    if (!deleteAuthor) {
      return res.status(404).json({ message: 'libro no existe' });
    }
    return res.status(200).json(deleteAuthor);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  addAuthor,
  selectAuthor,
  selectOneAuthor,
  updateAuthor,
  deleteAuthor,
};
