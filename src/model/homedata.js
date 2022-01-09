//Accessing Moongose package
const mongoose = require('mongoose');

//Database Connection
mongoose.connect('mongodb://localhost:27017/mail');

// Schema definition
const Schema=mongoose.Schema;

// Dtabase Structure
// image save in filename so we use String type
const EmailSchema = new Schema({
    email:{type: String,
    required:'Enter your email',
    // unique:true
    }
});


// Model Creation-(collection_name,Schema Name we created)
var Homedata = mongoose.model('maildata',EmailSchema);


module.exports = Homedata;