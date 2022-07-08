const Discord = require("discord.js");
module.exports = {
  name: "ping",
  description: "Reply ping of the API",
  permLevel: 50,
  type: 1,
  execute: async (interaction, client) => {
    const Pinging = new Discord.MessageEmbed();
    Pinging.setTitle("__**PONG!**__");
    Pinging.setDescription(`> ${client.ws.ping}ms`);

    interaction.reply({ embeds: [Pinging] });
  },
};
