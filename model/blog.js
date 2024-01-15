// module.exports = (sequelize, Sequelize) => {
//   const Blog = sequelize.define("blog", {
//     name: {
//       type: Sequelize.STRING,
//     },
//     desc: {
//       type: Sequelize.STRING,
//     },

//   });

//   return Blog;
// };


module.exports = (sequelize, Sequelize) => {
  const Blog = sequelize.define("blog", {
    name: {
      type: Sequelize.STRING,
    },
    desc: {
      type: Sequelize.STRING,
    },
    phoneNumber: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true, // Ensure the value is a valid email address
      },
    },
  });

  return Blog;
};
