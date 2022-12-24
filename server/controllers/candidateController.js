const mongoose = require('mongoose')
const candidateService = require('../services/candidates')

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

const putCandidate = async (req, res, next) => {
    const {ime, prezime, JMBG, telefon, email, slika} = req.body;
    try{
        if(telefon || ime || prezime || JMBG || email || slika){
            const error = new Error("Niste poslali neophoden podatke");
            error.status = 400;
            throw error;
        }
        const jwt = await candidateService.addNewCandidate(ime, prezime, JMBG, telefon, email, slika);
        res.status(201).json({token: jwt});
    }catch(error){
        console.log(error);
        next(error);
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