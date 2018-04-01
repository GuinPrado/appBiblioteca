const mongoose = require('mongoose')

function create(req, res) {
    res.send("Fine")
}

function findOne(req, res) {
    res.send('find')
}

module.exports = {
    create,
    findOne
}