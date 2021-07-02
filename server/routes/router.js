const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controllers = require('../controller/controller');

/**
 * @description Root Route
 * @method GET / 
 */

route.get('/', services.homeRoutes)

/**
 * @description Add User Route
 * @method GET / add_user
 */

route.get('/add-user', services.add_user)

/**
 * @description Update User Route
 * @method GET /update_user
 */

route.get('/update-user', services.update_user)

// API
route.post('/api/users', controllers.create);
route.get('/api/users', controllers.find);
route.put('/api/users/:id', controllers.update);
route.delete('/api/users/:id', controllers.delete);

module.exports = route;