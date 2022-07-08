const Discord = require("discord.js");
module.exports = {
  name: "ping",
  description: "Reply ping of the API",
  type: 1,
  execute: async (interaction) => {
    const Pinging = new Discord.MessageEmbed();
    Pinging.setTitle("> __**PONG!**__");

    interaction.reply({ embeds: [Pinging] });
  },
};
