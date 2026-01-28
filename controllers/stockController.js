const db = require("../models");
const Product = db.Product;

exports.index = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.render("index", { products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching products.");
  }
};
