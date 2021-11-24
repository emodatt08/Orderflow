'use strict';
var dbConn = require('./../../config/db.config');
//rider object create
var Rider = function(rider){
  this.vehicle_id     = rider.vehicle_id;
  this.firstname     = rider.firstname;
  this.lastname      = rider.lastname;
  this.middlename    = rider.middlename;
  this.email         = rider.email;
  this.mobile        = rider.mobile;
  this.province      = rider.province;
  this.gender        = rider.gender;
  this.city          = rider.city;
  this.state         = rider.state;
  this.country       = rider.country;
  this.status        = rider.status ? rider.status : 1;
  this.date_created    = new Date();
  this.date_updated    = new Date();
};
Rider.create = function (newRider, result) {
dbConn.query("INSERT INTO riders set ?", newRider, function (err, res) {
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

Rider.findById = function (id, result) {
dbConn.query("Select * from riders where rider_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Rider.findAll = function (result) {
dbConn.query("Select * from riders", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('riders : ', res);
  result(null, res);
}
});
};

Rider.update = function(id, rider, result){
dbConn.query("UPDATE riders SET vehicle_id=?firstname=?,lastname=?,middlename=?,email=?,mobile=?,province=?,gender=?,city=?,state=?,country=?,status=? WHERE id = ?", [rider.vehicle_id,rider.firstname,rider.lastname,rider.middlename,rider.email,rider.mobile,rider.province,rider.gender,rider.city,rider.state,rider.country,rider.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Rider.delete = function(id, result){
dbConn.query("DELETE FROM riders WHERE rider_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Rider;