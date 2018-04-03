const express = require('express')
const controllerLogin = require('./login/controller')
const controlerUser = require('./user/controlerUser')
const routes = express.Router()

// LOGIN
// routes.post('/login/register', controllerLogin.create)
// routes.get('/login/get', controllerLogin.findOne)

// USER
routes.post('/user/register/', controlerUser.register)


//LOGIN
routes.post('/login/', controllerLogin.login)

module.exports = routes