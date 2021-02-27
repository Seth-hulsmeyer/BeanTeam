const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const opts = { toJSON: { virtuals: true } };

const BeanUserSchema = new Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
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
});

const BeanUsers = mongoose.model("bean_users", BeanUserSchema);

// module.exports = BeanDB;
module.exports = BeanUsers;
