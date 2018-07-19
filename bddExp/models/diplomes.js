const mongoose = require('mongoose');

const DiplomeSchema = mongoose.Schema({
    titre:{
        type : String,
        required: true
    },
    description:{
        type : String,
        required: true
    },
    date:{
        type : String,
        required: true
    },
});

const Diplome = module.exports = mongoose.model('Diplome', DiplomeSchema);
