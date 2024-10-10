const express = require('express');
const router = express.Router();

const {
  addAuthor,
  selectAuthor,
  selectOneAuthor,
  updateAuthor,
  deleteAuthor,
} = require('../controllers/author.controller');

router.post('/', addAuthor);
router.get('/', selectAuthor);
router.get('/:id', selectOneAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

module.exports = router;
