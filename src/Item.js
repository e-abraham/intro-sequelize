const {sequelize, DataTypes, Model} = require('./db');

class Item extends Model {
	//add custom methods for advanced querying
}

Item.init({
	name: DataTypes.STRING,
}, {
	sequelize,
	timestamps: false
});

module.exports = { Item };