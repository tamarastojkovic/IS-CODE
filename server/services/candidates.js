const bcrypt = require("bcrypt")
const bcrypt = require("bcrypt")
const jwtUtil = require("../utils/jwt")
const SALT_ROUNDS = 10;
const Candidate = require("../models/candidateModel")
const mongoose = require("mongoose")

const getPassword = async (lozinka) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashPass = await bcrypt.hash(lozinka, salt);
  return{salt: salt, hashPass : hashPass};
}

const addNewCandidate = async function (ime, prezime, JMBG, telefon, email, slika){
    
        const lozinka = getPassword(JMBG);

        const candidate = new Candidate({
            _id: new mongoose.Types.ObjectId(),
            ime,
            prezime,
            lozinka,
            email,
            pol,
            telefon,
            JMBG        
        });

        candidate.save();
       
        return jwtUtil.generateJWT({
            ime: ime,
            prezime: prezime
        });
    
}

module.exports = {addNewCandidate}