// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL);
} else {

    sequelize = new Sequelize("Burgers2", "root", {
        host: "localhost",
        dialect: "mysql",
        PORT: 8080
    });
};
// Exports the connection for other files to use
module.exports = sequelize;
