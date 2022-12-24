const Candidate = require('../models/candidateModel')
const mongoose = require('mongoose')

const getCandidateById = async (req,res,next) => {
    const id = req.params.id;
    try {
        const candidate = await Candidate.findById(id,'_id').exec()
        if(!candidate){
            const error = new Error("Ne postoji kandidat sa tim identifikatorom");
            error.status = 404;
            throw error;
        }
        res.status(200).json(payment);
    } catch (error) {
        
    }
}

const addGroup = async (req,res,next) => {

    const {id,idGroup} = req.body
    try {
        const updatedCandidate = await Candidate.findByIdAndUpdate(id,{ idGrupe: idGroup },{new: true,useFindAndModify:false}).exec();
        if(!updatedCandidate){
            const error = new Error("Ne postoji kandidat sa tim identifikatorom");
            error.status = 404;
            throw error;
        }
        console.log(updatedCandidate);
        res.status(201).json({'message': "Uspesno je izabrana grupa"});
  
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getCandidateById,
    addGroup
}