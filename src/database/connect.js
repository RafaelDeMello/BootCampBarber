const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSOWORD}@cursonodejsdicasparadev.vqacf2i.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJsDicasparaDevs`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar ao banco de dados:",
          error
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
