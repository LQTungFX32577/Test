const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    name: String,
    street: String,
    address: String
});

module.exports = mongoose.model('homes', homeSchema);