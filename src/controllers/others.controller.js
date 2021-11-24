'use strict';
const Others = require('../models/others.model');

exports.findAllPromos = function(req, res) {
Others.findAllPromos(function(err, others) {
  console.log('others controller, all promos')
  if (err)
  res.send(err);
  console.log('others controller, all promos res', others);
  res.send(others);
});
};

exports.findPromosById = function(req, res) {
others.findPromosById(req.params.promo_id, function(err, others) {
  if (err)
  res.send(err);
  res.json(others);
});
};

exports.findAllDiscounts = function(req, res) {
    Others.findAllDiscounts(function(err, others) {
      console.log('others controller, all discounts')
      if (err)
      res.send(err);
      console.log('others controller, all discounts res', others);
      res.send(others);
    });
    };
    
    exports.findDiscountsById = function(req, res) {
    others.findDiscountsById(req.params.discount_id, function(err, others) {
      if (err)
      res.send(err);
      res.json(others);
    });
    };

