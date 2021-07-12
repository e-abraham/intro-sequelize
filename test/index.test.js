const {sequelize} = require("../src/db");
const {Restaurant, Menu, Item } = require("../src/index");

describe('Restaurant Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({name : 'Sushi Kadan'})
		expect(testRestaurant.name).toBe('Sushi Kadan')
	})

	test('can create a menu', async() => {
		const testMenu = await Menu.create({name : 'Sushi Rolls'})
		expect(testMenu.name).toBe('Sushi Rolls')
	})

    test('can create a menu item', async() => {
		const testItem = await Item.create({name : 'Mango Fandango'})
		expect(testItem.name).toBe('Mango Fandango')
	})

    test("restaurants have a max occupancy", async () => {
        const testRestaurant = await Restaurant.create({name : 'Sushi Kadan', occupancy: 100})
        console.log(testRestaurant.dataValues)
        expect(testRestaurant.occupancy).toBe(100)
    })
    
    test("restaurants have menus", async () => {
        const testRestaurant = await Restaurant.create({name : 'Sushi Kadan'})
        const testMenu = await Menu.create({name : 'Sushi Rolls'})
        await testRestaurant.addMenu(testMenu)
        const menus = await testRestaurant.getMenus()
        expect(menus[0].name).toBe("Sushi Rolls")
        expect(menus[0] instanceof Menu).toBeTruthy();
    })

    test("menus have menu items", async () => {
        const testMenu = await Menu.create({name : 'Sushi Rolls'})
        const testItem = await Item.create({name : 'Mango Fandango'})
        await testMenu.addItem(testItem)
        const items = await testMenu.getItems()
        expect(items[0].name).toBe("Mango Fandango")
        expect(items[0] instanceof Item).toBeTruthy();
    })

})