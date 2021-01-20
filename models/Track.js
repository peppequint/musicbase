const mongoose = require("mongoose");

const trackSchema = mongoose.Schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  source: {}
});
