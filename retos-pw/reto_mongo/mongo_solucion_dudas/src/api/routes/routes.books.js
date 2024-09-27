const express = require('express');
const router = express.Router();
const { getAllBooks, add } = require('../controllers/books.controller');

router.get('/getBooks', getAllBooks);
router.post('/add', add);

module.exports = router;
