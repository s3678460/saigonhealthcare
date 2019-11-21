const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// Create Contact Schema

const ContactSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        
    },
    gender:{
        type:String,
        required:true
    },
    addressNumber:{
        type:String,
        required: true
    },
    ward:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    dob: {
        type: String,
        required: true
    },
    lotteryNumber:{
       type: String
    }
});

module.exports = Contact = mongoose.model('contacts',ContactSchema);