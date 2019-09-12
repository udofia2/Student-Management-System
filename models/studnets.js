const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: String},
    email: {type: String},
    gender: {type: String}
})

module.exports = mongoose.model('Student', userSchema)