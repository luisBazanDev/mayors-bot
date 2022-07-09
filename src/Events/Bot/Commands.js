const Discord = require("discord.js");
const Users = require("../../DataBase/models/Users.js");
const Guilds = require("../../DataBase/models/Guilds.js");

module.exports = {
  name: "interactionCreate",
  execute: async (interaction, client) => {
    if (!interaction.isCommand()) return;
    const userData = await Users.findOne({
      user_id: interaction.user.id,
    });
    if (userData === null) return;
    const guildData = await Guilds.findOne({
      guild_id: interaction.guild.id,
    });
    if (guildData === null) return;
    client.slashcmds.forEach(async (search, index) => {
      if (interaction.commandName === search.name) {
        interaction.lang = require(`../../../resources/langs/${guildData.lang}.json`);
        if (client.slashcmds[index].permLevel > userData.permissions) {
          interaction.reply({
            embeds: [
              client.format.errorEmbed(
                interaction.lang.error["dont-permission"]
              ),
            ],
          });
          return;
        }
        client.slashcmds[index].execute(interaction, client);
      }
    });
  },
};
