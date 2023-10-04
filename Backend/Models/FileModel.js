const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   Firstname: {
      type: String,
   },
   fileName: {
      type: String,
   },
   fileURL: {
      type: String,
   },
   patientDetails: {
      type: Object
   }
});


module.exports = mongoose.model("FilesofWebUsers", userSchema);