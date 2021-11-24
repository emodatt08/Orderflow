'use strict';
var dbConn = require('./../../config/db.config');
//products object create
var Products = function(products){
  this.product_id     = products.product_id;
  this.prod_sku       = products.prod_sku;
  this.productname    = products.productname;
  this.price          = products.price;
  this.weight         = products.weight;
  this.description    = products.description;
  this.image          = products.image;
  this.category_id    = products.category_id;
  this.stock          = products.stock;
  this.status         = products.status ? products.status : 1;
  this.date_created   = new Date();
  this.date_updated   = new Date();
};
Products.create = function (newProd, result) {
dbConn.query("INSERT INTO products set ?", newProd, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

Products.findById = function (id, result) {
dbConn.query("Select * from products where product_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Products.findAll = function (result) {
dbConn.query("Select * from products", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('products : ', res);
  result(null, res);
}
});
};

Products.update = function(id, products, result){
  this.prod_sku       = products.prod_sku;
  this.productname    = products.productname;
  this.price          = products.price;
  this.weight         = products.weight;
  this.description    = products.description;
  this.image          = products.image;
  this.category_id    = products.category_id;
  this.stock          = products.stock;
  this.status         = products.status ? products.status : 1;
  this.date_updated   = new Date();
dbConn.query("UPDATE products SET prod_sku=?,price=?,weight=?,description=?,image=?,category_id=?,stock=?,date_updated=?,status=? WHERE product_id = ?", [
    products.prod_sku,products.price,products.weight,products.description,products.image,products.category_id,products.stock,products.date_updated,products.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Products.delete = function(id, result){
dbConn.query("DELETE FROM products WHERE product_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Products;