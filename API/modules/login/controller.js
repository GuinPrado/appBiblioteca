const mongoose = require('mongoose')
const User = require('../user/user')

function login(req, res) {
    User.findOne({ email: req.body.email }, function (err, data) {
        if (!data) {
            res.status(500).json({ isValid: false, message: 'E-mail não encontrado!' })
        } else {
            if (data.password != req.body.password) {
                res.status(401).json({ isValid: false, message: 'Senha incorreta!' })
            }
            res.status(200).json({ isValid: true, message: '' })
        }
    })
}

function findOne(req, res) {
    res.send('find')
}

module.exports = {
    login
}