const mongoose = require('mongoose')

function open() {
    mongoose.Promise = global.Promise
    mongoose.connection.openUri("mongodb://localhost:32769")
}

module.exports = {
    open
}