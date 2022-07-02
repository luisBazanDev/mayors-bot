const mongoose = require("mongoose");
const fs = require("fs");

mongoose.connection.once("connected", () => {
  console.log("MongoDB is connected");
  const models = fs.readdirSync("./src/Database/models/", {
    encoding: "utf-8",
  });
  for (const model of models) {
    require(`./models/${model}`);
    console.log(`Loaded Model: ${model.replace(".js")}`);
  }
});

mongoose.connection.on("reconnected", () => {
  console.log(`[${new Date().toUTCString()}] MongoDB is reconnected`);
});

mongoose.connection.on("disconnected", () => {
  console.log(`[${new Date().toUTCString()}] MongoDB is disconnected`);
});

mongoose.connect(process.env.MONGO_URI);
