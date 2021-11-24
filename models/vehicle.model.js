'use strict';
var dbConn = require('./../../config/db.config');
//vehicles object create
var Vehicle = function(vehicle){

  this.prod_sku       = vehicle.prod_sku;
  this.vehicle_name    = vehicle.vehiclename;
  this.price          = vehicle.price;
  this.vehicle_category = vehicle.vehicle_category;
  this.status         = vehicle.status ? vehicle.status : 1;
};
Vehicle.create = function (newVeh, result) {
dbConn.query("INSERT INTO vehicles set ?", newVeh, function (err, res) {
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

Vehicle.findById = function (id, result) {
dbConn.query("Select * from vehicles where vehicle_id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};

Vehicle.findAll = function (result) {
dbConn.query("Select * from vehicles", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('vehicles : ', res);
  result(null, res);
}
});
};

Vehicle.update = function(id, vehicles, result){
dbConn.query("UPDATE vehicles SET vehicle_name=?,vehicle_category=?,status=? WHERE vehicle_id = ?", [
    vehicles.vehicle_name,vehicles.vehicle_category,vehicles.status, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};

Vehicle.delete = function(id, result){
dbConn.query("DELETE FROM vehicles WHERE vehicle_id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Vehicle;