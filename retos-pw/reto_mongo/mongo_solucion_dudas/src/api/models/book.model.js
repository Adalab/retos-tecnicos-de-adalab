const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, require: true },
    authors: [{ type: Schema.ObjectId, ref: 'authors' }],
  },
  {
    collection: 'books',
  }
);

const Book = mongoose.model('books', bookSchema);
module.exports = Book;
