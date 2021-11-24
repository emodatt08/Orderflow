'use strict';
var dbConn = require('./../../config/db.config');
//order object create
var Order = function(order){
  this.order_user_id     = order.order_user_id;
  this.product_id     = order.product_id;
  this.vehicle_id    = order.vehicle_id;
  this.amount        = order.amount;
  this.order_number  = order.order_number;
  this.order_name    = order.order_name;
  this.address       = order.address;
  this.city          = order.city;
  this.state         = order.state;
  this.country       = order.country;
  this.mobile        = order.mobile;
  this.tax           = order.tax;
  this.email         = order.email;
  this.shipped       = order.shipped;
  this.tracking_number = order.tracking_number;
  this.mode_of_payment = order.mode_of_payment;
  this.status        = order.status ? order.status : 1;
  this.date_created    = new Date();
  this.date_updated    = new Date();
};
Order.create = function (newOrd, result) {
dbConn.query("INSERT INTO orders set ?", newOrd, function (err, res) {
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

Order.findById = function (id, result) {
dbConn.query("Select * from orders where order_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Order.findAll = function (result) {
dbConn.query("Select * from orders", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('orders : ', res);
  result(null, res);
}
});
};

Order.update = function(id, order, result){
dbConn.query("UPDATE orders SET order_user_id=?,product_id=?,vehicle_id=?,amount=?,order_number=?,order_name=?,address=?,city=?,state=?,country=?,tax=?,shipped=?,tracking_number=?,mode_of_payment=?,date_created,status=? WHERE order_id = ?", [
    order.order_user_id,order.product_id,order.vehicle_id,order.amount,order.order_number,order.address,order.city,order.state,order.country,order.tax,order.shipped,order.tracking_number,order.mode_of_payment,order.date_created,order.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Order.delete = function(id, result){
dbConn.query("DELETE FROM orders WHERE order_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Order;