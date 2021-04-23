var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    username:{
        type: String,
        maxlength: 32,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: String
    }
  },{
      timestamps:true
  });


  module.exports=mongoose.model("User",userSchema);