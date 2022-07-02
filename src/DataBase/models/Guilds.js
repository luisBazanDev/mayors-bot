const { model, Schema } = require("mongoose");

const Guilds = new Schema({
  guild_id: Number,
  display_name: String,
});

module.exports = model("Guilds", Guilds);
