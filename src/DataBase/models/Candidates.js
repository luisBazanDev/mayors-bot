const { model, Schema } = require("mongoose");

const Candidates = new Schema({
  guild_id: String,
  user_id: String,
  proposals: {
    type: Array,
    default: [],
  },
  votes: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Model = model("Candidates", Candidates);
Model.resolveCandidate = async ({ guild_id, user_id }) => {
  if (!guild_id || !user_id) return undefined;
  const fetchData = await Model.findOne({
    guild_id,
    user_id,
  });
  if (fetchData) return fetchData;
  const CandidateData = new Model({
    guild_id,
    user_id,
  });
  await CandidateData.save();
  return CandidateData;
};

module.exports = Model;
