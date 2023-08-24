const express = require('express');
const userController = require('../controllers/authController');

const Router = express.Router();

Router.get('/auth/refresh',userController.refresh);
Router.get('/auth/logout',userController.logout);

module.exports = Router;
