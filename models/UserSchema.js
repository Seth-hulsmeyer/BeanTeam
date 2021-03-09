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
    unique: true
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



// const bcrypt = require("bcryptjs");

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("User", {
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     first_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     last_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   });

//   User.prototype.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
//   };
//   User.addHook("beforeCreate", (user) => {
//     user.password = bcrypt.hashSync(
//       user.password,
//       bcrypt.genSaltSync(10),
//       null
//     );
//   });
//   return User;
// };

