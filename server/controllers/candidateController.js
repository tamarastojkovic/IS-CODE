const candidateService = require('../services/candidates');
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const mailService = require("../utils/mailservice");

const getCandidateById = async (req,res,next) => {
    const id = req.params.id;
    try {
        const candidate = await candidateService.getCandidateById(id);
        if(!candidate){
            const error = new Error("Ne postoji kandidat sa tim identifikatorom");
            error.status = 404;
            throw error;
        }
        res.status(200).json(candidate);
    } catch (error) {
        const errors = new Error("Ne postoji kandidat sa tim identifikatorom");
        errors.status = 404;
        next(errors);
    }
}

const putCandidate = async (req, res, next) => {
    const {ime, prezime, jmbg, telefon, email, slika} = req.body;
    try{
        if(!telefon || !ime || !prezime || !jmbg || !email ){
            console.log(telefon, ime, prezime, jmbg, email)
            const error = new Error("Niste poslali neophoden podatke");
            error.status = 400;
            throw error;
        }
        const jwt = await candidateService.addNewCandidate(ime, prezime, jmbg, telefon, email, slika);
        //mailService.sednMailTo(email, `Account created", "New account with id: 1 and password: ${jmbg}`);
        res.status(201).json({token: jwt});
    }catch(error){
        console.log(error);
        next(error);
    }
}

const addGroup = async (req,res,next) => {

    const {id,idGroup} = req.body
    try {
        if(!id || !idGroup){
            const error = new Error("Niste poslali neophoden podatke");
            error.status = 400;
            throw error;
        }
        console.log("Setovanje grupee1");
        const updatedCandidate = await candidateService.setGroup(idGroup, id);
        if(!updatedCandidate){
            const error = new Error("Ne postoji kandidat sa tim identifikatorom");
            error.status = 404;
            throw error;
        }
        console.log(updatedCandidate);
        res.status(201).json({'message': "Uspesno je izabrana grupa",'user': candidate});
  
        
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try{
        const {id, lozinka} =req.body;
    
        if(id && lozinka){
            var user = await candidateService.getCandidateById(id);
            console.log(user);
        }

        if(!user)
        return res.status(401).json({message:"No such user"})
    
        if(await bcrypt.compare(lozinka, user.lozinka.hashPass)){

        const token = jwt.generateJWT({id:user._id});
        user.lozinka=undefined;
        
        return res.status(200).json({message:"Login successs,",token:token,user:user});
        }
        return res.status(401).json({message:"Wrong password"});
    }catch(error){
        next(error);
    }
}

module.exports = {
    getCandidateById,
    addGroup,
    putCandidate,
    loginUser
}