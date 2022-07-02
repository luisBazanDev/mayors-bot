/**************************************
 *                                    *
 * In this file, configure the social *
 *   networks that the bot supports.  *
 *                                    *
 **************************************/

const socials = [
  {
    name: "discord",
    displayName: "Discord",
    urls: ["discord.gg", "discord.com/invite"],
  },
  {
    name: "twitch",
    displayName: "Twitch",
    urls: ["twitch.tv", "www.twitch.tv"],
  },
  {
    name: "youtube",
    displayName: "Youtube",
    urls: [
      "www.youtube.com/channel",
      "www.youtube.com/c",
      "youtube.com/channel",
      "youtube.com/c",
    ],
  },
];
module.exports = {
  validate: (link) => {
    if (link.startsWith("https://")) link = link.replace("https://", "");
    const parts = link.split("/");
    for (const social of socials) {
      for (var compare of social.urls) {
        if (!link.startsWith(compare)) continue;
        if (parts.length - 1 === compare.split("/").length) return true;
      }
    }
    return false;
  },
  getSocial: (link) => {
    if (link.startsWith("https://")) link = link.replace("https://", "");
    for (const social of socials) {
      for (var compare of social.urls) {
        if (!link.startsWith(compare)) continue;
        return social;
      }
    }
  },
  socials,
};
