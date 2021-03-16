const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
