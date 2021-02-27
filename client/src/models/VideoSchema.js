const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const opts = { toJSON: { virtuals: true } };

// MONGO SCHEMA
const BeanVideoSchema = new Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
});

const BeanVideo = mongoose.model("bean_video", BeanVideoSchema);
module.exports = BeanVideo;
