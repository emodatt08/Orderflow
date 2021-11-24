'use strict';
const Order = require('../models/order.model');

exports.findAll = function(req, res) {
Order.findAll(function(err, order) {
  console.log('order controller')
  if (err)
  res.send(err);
  console.log('order res', order);
  res.send(order);
});
};

exports.create = function(req, res) {
const new_order = new Order(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
order.create(new_order, function(err, order) {
  if (err)
  res.send(err);
  res.json({error:false,message:"order added successfully!",data:order});
});
}
};

exports.findById = function(req, res) {
Order.findById(req.params.order_id, function(err, order) {
  if (err)
  res.send(err);
  res.json(order);
});
};


exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Order.update(req.params.order_id, new order(req.body), function(err, order) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'order successfully updated' });
});
}
};


exports.delete = function(req, res) {
Order.delete( req.params.order_id, function(err, order) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'order successfully deleted' });
});
};