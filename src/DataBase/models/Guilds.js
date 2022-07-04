const { model, Schema } = require("mongoose");

const Guilds = new Schema({
  guild_id: Number,
  display_name: String,
  lang: {
    type: String,
    default: "EN",
  },
});

module.exports = model("Guilds", Guilds);
