const bcrypt = require("bcrypt")
const jwtUtil = require("../utils/jwt")
const SALT_ROUNDS = 10;

const getPassword = async (lozinka) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  const hashPass = await bcrypt.hash(lozinka, salt);
  return{salt: salt, hashPass : hashPass};
}

var listaKandidata = [];
var idCounter=1

const addNewCandidate = async function (ime, prezime, jmbg, telefon, email, slika){
    
        const lozinka = await getPassword(jmbg);
        console.log(lozinka);
        const candidate = {
            _id: idCounter++,
            ime:ime,
            prezime: prezime,
            lozinka: lozinka,
            email: email,
            pol: "m",
            telefon: telefon,
            jmbg:jmbg ,
            datumRođenja :null,
            datumUpisa :null,
            idInstruktora: null,
            idGrupe : null
        };
        console.log(idCounter);

        listaKandidata.push(candidate);
       
        return jwtUtil.generateJWT({
            ime: ime,
            prezime: prezime
        });
    
}

const getCandidateById = async function (id) {
    console.log(listaKandidata.length);
    for(let i = 0; i<listaKandidata.length; i++){
        console.log(listaKandidata[i]._id);
        console.log(`id: ${id}`)
        if(id == listaKandidata[i]._id){
            console.log(id);
            return listaKandidata[i];
        }
    }
    return undefined;
}


const setGroup = async function(idGrupe, idKandidata){
    candidate = getCandidateById(idKandidata);
    candidate.idGrupe = idGrupe;
    return candidate;
}
module.exports = {addNewCandidate, listaKandidata, getCandidateById, setGroup}