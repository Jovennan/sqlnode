const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: 'World'});
})
// GET localhost:3333/users
routes.get('/users', UserController.index);
// POST localhost:3333/users
routes.post('/users', UserController.store);

// GET localhost:3333/users/3/addresses
routes.get('/users/:user_id/addresses', AddressController.index);
// POST localhost:3333/users/3/addresses
routes.post('/users/:user_id/addresses', AddressController.store);

// GET localhost:3333/users/3/techs
routes.get('/users/:user_id/techs', TechController.index);
// POST localhost:3333/users/3/techs
routes.post('/users/:user_id/techs', TechController.store);
// POST localhost:3333/users/3/techs
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;