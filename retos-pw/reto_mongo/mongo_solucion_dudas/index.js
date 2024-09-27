const express = require('express');
const connectDB = require('./src/utils/database');
const routerBook = require('./src/api/routes/routes.books');

const server = express();
connectDB();
server.use('/', routerBook);
//rutas del author
//server.use("/author", routerAuthor)

server.listen('5001', () => {
  console.log('http://localhost:5001');
});
