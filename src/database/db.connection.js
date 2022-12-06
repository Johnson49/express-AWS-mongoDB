const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Realizado a conexão com o MongoDB Atlas...");

  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Conectado com MongoDB Atlas com sucessor."))
    .catch((err) => console.error(err));
};

module.exports = connectDatabase;
