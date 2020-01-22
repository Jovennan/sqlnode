const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
})

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/addresses', AddressController.index);
routes.post('/addresses', AddressController.store);

module.exports = routes;