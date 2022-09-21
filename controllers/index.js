import connection from "../db.js";
import shops from "../model.js";

const addShop = (req, res) => {
	let data = req.body;

	shops.create(data);

	res.status(200).send(`you have added ${data.name}`);
};

const getShops = async (req, res) => {
	let data = await shops.find();

	console.log(data);

	res.status(200).json(data);
};

export { addShop, getShops };
