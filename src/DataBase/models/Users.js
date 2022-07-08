const { model, Schema } = require("mongoose");
const socialNetworks = require("../../../resources/social_networks.js");

const Users = new Schema({
  user_id: String,
  user_name: String,
  display_avatar_url: String,
  nationality: String,
  birth_date: Date,
  bio: String,
  social_networks: {
    type: Array,
    default: [],
  },
  permissions: {
    type: Number,
    default: 0,
  },
});

Users.static.getAge = (birth_date) => {
  seconds = (new Date() - birth_date) / 1000;
  const days = Math.floor(seconds / (60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12.16);
  return { days, months, years };
};

Users.static.getSocials = (social_networks) => {
  return social_networks.map((link) => {
    const format = socialNetworks.getSocial(link);
    return {
      name: format.name,
      displayName: format.displayName,
      link,
    };
  });
};

module.exports = model("Users", Users);
