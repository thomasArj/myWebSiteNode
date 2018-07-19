const mongoose = require('mongoose');

const ExperienceSchema = mongoose.Schema({
    entreprise:{
        type : String,
        required: true
    },
    date:{
        type : String,
        required: true
    },
    poste:{
        type : String,
        required: true
    },
});

const Experience = module.exports = mongoose.model('Experience', ExperienceSchema);
