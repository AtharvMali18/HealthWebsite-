const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Firstname: {
        type: String,
    },
    patientDetails: {
        type: Object,
    }
});


module.exports = mongoose.model("DetailsofUsers", userSchema);