const express = require('express');
const router = express.Router();

const Experience = require('../models/experiences');
const Formation = require('../models/formations');
const Diplome = require('../models/diplomes');

//retriewing data
router.get('/experiences', (req, res, next)=>{
    Experience.find(function(err, experiences){
        res.json(experiences);
    })
})
router.get('/formations', (req, res, next)=>{
    Formation.find(function(err, formations){
        res.json(formations);
    })
})
router.get('/diplomes', (req, res, next)=>{
    Diplome.find(function(err, diplomes){
        res.json(diplomes);
    })
})

//add exp
router.post('/experience', (req, res, next)=>{
    let newExperience = new Experience({
        entreprise: req.body.entreprise,
        date: req.body.date,
        poste: req.body.poste
    });

    newExperience.save((err, experience)=>{
        if (err){
            res.json({msg: 'Failed to add exp'});
        } else {
            res.json({msg: 'Exp added successfully'});
        }
    });
});
router.post('/formation', (req, res, next)=>{
    let newFormation = new Formation({
        titre: req.body.titre,
        date: req.body.date
    });

    newFormation.save((err, formation)=>{
        if (err){
            res.json({msg: 'Failed to add form'});
        } else {
            res.json({msg: 'Form added successfully'});
        }
    });
});
router.post('/diplome', (req, res, next)=>{
    let newDiplome = new Diplome({
        titre: req.body.titre,
        description: req.body.description,
        date: req.body.date
    });

    newDiplome.save((err, diplome)=>{
        if (err){
            res.json({msg: 'Failed to add dip'});
        } else {
            res.json({msg: 'Dip added successfully'});
        }
    });
});

//delete express
router.delete('/experience/:id', (req, res, next)=>{
    Experience.remove({_id: req.params.id}, function(err, result){
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
router.delete('/formation/:id', (req, res, next)=>{
    Formation.remove({_id: req.params.id}, function(err, result){
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
router.delete('/diplome/:id', (req, res, next)=>{
    Diplome.remove({_id: req.params.id}, function(err, result){
        if (err){
            res.json(err);
        } else {
            res.json(result);
        }
    });
});


module.exports = router;
