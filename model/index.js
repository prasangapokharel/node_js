// const Sequelize = require('sequelize');
// const { dbConfig } = require('./dbConfig/dbConfig');

// const sequelize = new Sequelize(dbConfig.db, dbConfig.username, dbConfig.password, {
//   host: dbConfig.host,
//   dialect: dbConfig.dialect,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     idle: dbConfig.pool.idle,
//     acquire: dbConfig.pool.acquire,
//   },
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to the database has been established successfully.');
//     return sequelize.sync(); // Sync the models with the database
//   })
//   .then(() => {
//     console.log('Database synchronization complete.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   })
//   .finally(() => {
//     // Close the connection in both success and error cases
//     sequelize.close();
//   });

const Sequelize = require("sequelize");
const dbConfig = require('../dbConfig/dbConfig')
const sequelize = new Sequelize(
  dbConfig.db,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      accurate: dbConfig.pool.accurate, // Corrected property name
      idle: dbConfig.pool.idle,
    },
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectDatabase();


const db={}


module.exports = db
