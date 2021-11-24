const express = require('express')
const router = express.Router()
const customerController =   require('../controllers/customer.controller');
// Retrieve all customers
router.get('/', customerController.findAll);
// Create a new customer
router.post('/', customerController.create);
// Retrieve a single customer with id
router.get('/:id', customerController.findById);
// Update a customer with id
router.put('/:id', customerController.update);
// Delete a customer with id
router.delete('/:id', customerController.delete);
module.exports = router