module.exports = {
    username: "root",
    host: 'localhost',
    db: 'okcrud',
    password: '',
    dialect: 'mysql',  // Corrected property name
    pool: {
        max: 5,
        min: 0,
        idle: 0,
        acquire: 10000,
    }
};


