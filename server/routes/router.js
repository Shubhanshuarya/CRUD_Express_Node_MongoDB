const express = require('express');
const route = express.Router();
const services = require('../services/render')

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

module.exports = route;