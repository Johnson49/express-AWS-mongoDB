const  MongoMemoryServer = require("mongodb-memory-server")
const mongoose = require("mongoose");

const connectMemoryDatabase = async () => {
const mongoServer = await MongoMemoryServer.create();
const mongoUri = await mongoServer.getUri();
await mongoose
    .connect(mongoUri, { dbName: "testUser" })
    .then(() => console.log(`Conectado no banco em memoria do mongoDB com sucessor.`))
    .catch((err) => console.error(err));
};

module.exports = connectMemoryDatabase