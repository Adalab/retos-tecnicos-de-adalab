const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: { type: String, require: true },
    bio: { type: String },
  },
  {
    collection: 'authors',
  }
);
const Author = mongoose.model('authors', authorSchema);
module.exports = Author;
