const mongosse = require('mongoose');

const userSchema = mongosse.Schema({
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
})
module.exports = mongosse.model('users', userSchema);