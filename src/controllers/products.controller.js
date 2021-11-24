'use strict';
const Product = require('../models/product.model');

exports.findAll = function(req, res) {
Product.findAll(function(err, product) {
  console.log('product controller')
  if (err)
  res.send(err);
  console.log('product res', product);
  res.send(product);
});
};

exports.create = function(req, res) {
const new_product = new Product(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Product.create(new_product, function(err, product) {
  if (err)
  res.send(err);
  res.json({error:false,message:"product added successfully!",data:product});
});
}
};

exports.findById = function(req, res) {
Product.findById(req.params.product_id, function(err, product) {
  if (err)
  res.send(err);
  res.json(product);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Product.update(req.params.product_id, new product(req.body), function(err, product) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'product successfully updated' });
});
}
};


exports.delete = function(req, res) {
product.delete( req.params.product_id, function(err, product) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'product successfully deleted' });
});
};