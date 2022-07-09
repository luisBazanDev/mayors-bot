const Guilds = require("../../DataBase/models/Guilds.js");
module.exports = {
  name: "guildCreate",
  once: false,
  execute: async (guild, client) => {
    const fetchData = await Guilds.resolveGuild(guild.id);
    fetchData.display_name = guild.name;
    await guildData.save();
  },
};
