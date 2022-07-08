const Discord = require("discord.js");
const Users = require("../../DataBase/models/Users.js");
const Guilds = require("../../DataBase/models/Guilds.js");

module.exports = {
  name: "interactionCreate",
  execute: async (interaction, client) => {
    if (!interaction.isCommand()) return;
    client.slashcmds.forEach(async (search, index) => {
      if (interaction.commandName === search.name) {
        const guildData = await Guilds.findOne({
          guild_id: interaction.guild.id,
        });
        if (guildData === null) return;
        interaction.lang = require(`../../../resources/langs/${guildData.lang}.json`);

        const data = await Users.findOne({
          user_id: interaction.user.id,
        });
        if (data === null) return;
        if (client.slashcmds[index].permLevel > data.permissions) {
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
