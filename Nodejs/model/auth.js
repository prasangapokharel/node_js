module.exports = (sequelize, Sequelize) => {
    const Auth = sequelize.define("auth", {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    return Auth;
  };
  