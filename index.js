const {sequelize, DataTypes, Model} = require('./db');
const {Restaurant} = require("./Restaurant")
const {Menu} = require("./Menu")
const {Item} = require("./Item")

Restaurant.hasMany(Menu, {as: "menus", foreignKey: "restaurant_id"})
Menu.belongsTo(Restaurant, {foreignKey: "restaurant_id"})

Menu.hasMany(Item, {as: "items", foreignKey: "menu_id"})
Item.belongsTo(Menu, {foreignKey: "menu_id"})

module.exports = { Restaurant, Menu, Item };