const mongoose = require('mongoose');

const FormationSchema = mongoose.Schema({
    titre:{
        type : String,
        required: true
    },
    date:{
        type : String,
        required: true
    },
});

const Formation = module.exports = mongoose.model('Formation', FormationSchema);
