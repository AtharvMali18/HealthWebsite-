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
   }
});


module.exports = mongoose.model("FilesofWebUsers", userSchema);