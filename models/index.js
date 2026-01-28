const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/database.js");

const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage,
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Product = require("./product.js")(sequelize, DataTypes);

module.exports = db;
