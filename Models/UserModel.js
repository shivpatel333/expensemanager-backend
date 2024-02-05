const mongoose = require('mongoose');
const Schema = mongoose.Schema; //class

const UserSchema = new Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    }
})

//model...
module.exports = mongoose.model('User', UserSchema);