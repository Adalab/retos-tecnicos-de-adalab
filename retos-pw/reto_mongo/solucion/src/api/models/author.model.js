const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const authorSchema = new Schema(
  {
    name: { type: String, required: true },
    bio: { type: String },
    birthDate: { type: Date },
  },
  {
    collection: 'authors',
  }
);
const Author = mongoose.model('authors', authorSchema);
module.exports = Author;
