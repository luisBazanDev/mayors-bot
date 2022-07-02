const { Intents, Client } = require("discord.js");
const Handlers = require("node-handlers");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_MESSAGE_TYPING,
  ],
});

Handlers.dc.events(__dirname + "/Events", client);

client.login(process.env.BOT_TOKEN);

module.exports = client;
