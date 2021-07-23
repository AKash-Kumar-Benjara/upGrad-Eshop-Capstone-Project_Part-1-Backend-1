const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.User = require("./user.model.js")(mongoose);
db.Address = require("./address.model.js")(mongoose);
db.Order = require("./order.model.js")(mongoose);
db.Product = require("./product.model.js")(mongoose);

module.exports = db;