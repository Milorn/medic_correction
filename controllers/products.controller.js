const Product = require("../models/Product");

exports.index = async (req, res) => {
  const products = await Product.find();
  res.render("products/index", {
    products: products,
    authenticated: req.session.userId
  });
};

exports.show = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("products/show", {
    product: product,
  });
};

exports.create = (req, res) => {
  res.render("products/create");
};

exports.store = async (req, res) => {
  await Product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
  });
  res.redirect("/products");
};

exports.edit = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("products/edit", {
    product: product,
  });
};

exports.update = async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
  });
  res.redirect("/products");
};

exports.delete = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products");
};
