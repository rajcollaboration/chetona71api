const mongoose = require('mongoose');

const CategoryScheema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model('Category',CategoryScheema)