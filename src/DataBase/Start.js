const mongoose = require("mongoose");
const fs = require("fs");
const colog = require("colog");

mongoose.connection.once("connected", () => {
  colog.success("MongoDB is connected");
  const models = fs.readdirSync("./src/Database/models/", {
    encoding: "utf-8",
  });
  for (const model of models) {
    require(`./models/${model}`);
    colog.log(
      colog.cyan(`[MongoDB] Loaded Model: `) +
        colog.yellow(model.replace(".js", ""))
    );
  }
});

mongoose.connection.on("reconnected", () => {
  colog.info(`[${new Date().toUTCString()}] MongoDB is reconnected`);
});

mongoose.connection.on("disconnected", () => {
  colog.error(`[${new Date().toUTCString()}] MongoDB is disconnected`);
});

mongoose.connect(process.env.MONGO_URI);
