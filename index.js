// const { Person } = require("./person");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/connect");

dotenv.config();

require("./modules/express");

connectToDatabase();



// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
// const person = new Person("Felipe");
