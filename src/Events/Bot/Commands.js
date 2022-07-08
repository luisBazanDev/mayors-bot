module.exports = {
  name: "interactionCreate",
  execute: async (interaction, client) => {
    if (!interaction.isCommand()) return;
    client.slashcmds.forEach((search, index) => {
      if (interaction.commandName === search.name) {
        client.slashcmds[index].execute(interaction, client);
      }
    });
  },
};
