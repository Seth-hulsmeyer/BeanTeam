const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BeanUserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  videos: [
    {
      category: { type: String },
      title: { type: String },
      videoUrl: { type: String },
    },
  ],
  topics: {
    JS: { type: Boolean },
    React: { type: Boolean },
    HTML: { type: Boolean },
    CSS: { type: Boolean },
  },
});

const BeanUsers = mongoose.model("bean_users", BeanUserSchema);

module.exports = BeanUsers;
