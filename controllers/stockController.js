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

exports.getDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).send("Product not found.");
    }

    res.render('details', { product: product });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching product details.");
  }
};
