const express = require('express');
const router = express.Router();

const {
  addBook,
  selectBook,
  selectOneBook,
  updateBook,
  deleteOneBook,
} = require('../controllers/book.controller');

router.post('/', addBook);
router.get('/list', selectBook);
router.get('/:id', selectOneBook);
router.put('/:id', updateBook);
router.delete('/delete/:id', deleteOneBook);

module.exports = router;
