const { model, Schema } = require("mongoose");

const Guilds = new Schema({
  guild_id: Number,
  display_name: String,
  lang: {
    type: String,
    default: "EN",
  },
});

const Model = model("Guilds", Guilds);
Model.resolveGuild = async (guild_id) => {
  const fetchData = await Model.findOne({
    guild_id,
  });
  if (fetchData) {
    fetchData.display_name = guild.name;
    await fetchData.save();
    return;
  }
  const guildData = new Model({
    guild_id,
  });
  await guildData.save();
};

module.exports = Model;
