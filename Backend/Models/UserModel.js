const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
    },
    Surname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});


module.exports = mongoose.model("WebUsers", userSchema);