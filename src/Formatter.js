const Discord = require("discord.js");
module.exports = {
  errorEmbed: (msg) => {
    const embed = new Discord.MessageEmbed();
    embed.setColor("#ff0000");
    embed.setTitle("Error :x:");
    embed.setDescription(`> ${msg}`);
    return embed;
  },
};
