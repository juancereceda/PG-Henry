const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    console.log(error);
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, category, price, stock, imgUrl, combo } = req.body;
    const product = await new Product({
      name,
      category,
      price,
      stock,
      imgUrl,
      combo,
    });
    const productSaved = await product.save();
    res.status(201).send(productSaved);
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    let result = await Product.findOneAndUpdate({ name }, { price });

    if (!result) {
      return res.status(404).send("Product not found");
    }
    return res.send("Product modified");
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const name = req.params.name;
    await Product.deleteOne({ name });
    res.json({ message: `Product has been deleted` });
  } catch (error) {
    res.status(400).send(error);
  }
};

const setPrice = async (req, res) => {
  try {
    const { extras } = req.body;
    let products = Object.keys(extras);
    let amount = Object.values(extras);
    let total = 0;
    for (i = 0; i < products.length; i++) {
      let result = await Product.findOne({ name: products[i] });
      if (!result) {
        return res.status(404).send("Product not found");
      } else {
        total = total + result.price * amount[i];
      }
    }
    res.json(total);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  setPrice,
};
