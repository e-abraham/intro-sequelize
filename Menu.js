const {sequelize, DataTypes, Model} = require('./db');

class Menu extends Model {
	//add custom methods for advanced querying
}

Menu.init({
	name: DataTypes.STRING,
}, {
	sequelize,
	timestamps: false
});

module.exports = { Menu };