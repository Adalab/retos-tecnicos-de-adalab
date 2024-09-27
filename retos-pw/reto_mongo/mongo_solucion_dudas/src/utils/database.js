const mongoose = require('mongoose');
const uri =
  'mongodb+srv://dayana:I86qQUFjRu3frMxz@cluster0.v4fvtsu.mongodb.net/books?retryWrites=true&w=majority&appName=Cluster0';
const connectDB = async () => {
  try {
    const db = await mongoose.connect(uri);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD ${name} servidor: ${host}`);
  } catch {}
};
module.exports = connectDB;
