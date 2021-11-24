'use strict';
var dbConn = require('./../../config/db.config');
//customer object create
var Customer = function(customer){
  this.firstname     = customer.firstname;
  this.lastname      = customer.lastname;
  this.middlename    = customer.middlename;
  this.email         = customer.email;
  this.mobile        = customer.mobile;
  this.province      = customer.province;
  this.gender        = customer.gender;
  this.city          = customer.city;
  this.state         = customer.state;
  this.country       = customer.country;
  this.status        = customer.status ? customer.status : 1;
  this.date_created    = new Date();
  this.date_updated    = new Date();
};
Customer.create = function (newCus, result) {
dbConn.query("INSERT INTO customers set ?", newCus, function (err, res) {
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

Customer.findById = function (id, result) {
dbConn.query("Select * from customers where cust_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Customer.findAll = function (result) {
dbConn.query("Select * from customers", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('customers : ', res);
  result(null, res);
}
});
};

Customer.update = function(id, customer, result){
dbConn.query("UPDATE customers SET firstname=?,lastname=?,middlename=?,email=?,mobile=?,province=?,gender=?,city=?,state=?,country=?,status=? WHERE id = ?", [customer.firstname,customer.lastname,customer.middlename,customer.email,customer.mobile,customer.province,customer.gender,customer.city,customer.state,customer.country,customer.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Customer.delete = function(id, result){
dbConn.query("DELETE FROM customers WHERE cust_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Customer;