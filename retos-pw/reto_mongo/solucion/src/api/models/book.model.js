const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: { type: String, require: true },
    genre: { type: String },
    year: { type: Number },
    authors: [{ type: Schema.Types.ObjectId, ref: 'authors' }],
  },
  {
    collection: 'books',
  }
);
const Book = mongoose.model('books', bookSchema);
module.exports = Book;
