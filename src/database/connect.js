const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.vqacf2i.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJsDicasparaDevs`
    );
    console.log("Conexão ao banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar ao banco de dados:", error);
  }
};

module.exports = connectToDatabase;
