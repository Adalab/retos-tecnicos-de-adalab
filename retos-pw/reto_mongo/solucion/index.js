//import de dependecias y archivos
const express = require('express');
const { connectDB } = require('./src/utils/database');
require('dotenv').config();
const cors = require('cors');

const routerBook = require('./src/api/routes/book.routes');
const routerAuthor = require('./src/api/routes/author.routes');
// configuración del servidor
const server = express();
server.use(express.json());
server.use(cors());
connectDB();

// configuro el servidor con las rutas
server.use('/books', routerBook);
server.use('/authors', routerAuthor);

//ejecucion del servidor
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Escuchando puerto http://localhost:${PORT}`);
});
