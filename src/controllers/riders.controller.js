'use strict';
const Rider = require('../models/rider.model');

exports.findAll = function(req, res) {
Rider.findAll(function(err, rider) {
  console.log('rider controller')
  if (err)
  res.send(err);
  console.log('rider res', rider);
  res.send(rider);
});
};

exports.create = function(req, res) {
const new_rider = new Rider(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Rider.create(new_rider, function(err, rider) {
  if (err)
  res.send(err);
  res.json({error:false,message:"rider added successfully!",data:rider});
});
}
};

exports.findById = function(req, res) {
Rider.findById(req.params.rider_id, function(err, rider) {
  if (err)
  res.send(err);
  res.json(rider);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Rider.update(req.params.rider_id, new Rider(req.body), function(err, rider) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'rider successfully updated' });
});
}
};


exports.delete = function(req, res) {
Rider.delete( req.params.rider_id, function(err, rider) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'rider successfully deleted' });
});
};