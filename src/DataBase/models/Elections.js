const { model, Schema } = require("mongoose");

const Elections = new Schema({
  guild_id: String,
  role_id: String,
  title: String,
  description: String,
  ending: Date,
  activade: {
    type: Boolean,
    default: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  candidates: {
    type: Array,
    default: [],
  },
});

const Model = model("Elections", Elections);
Model.resolveElection = async () => {};

module.exports = Model;
