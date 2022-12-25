export interface ICandidate {
    _id: string,
    ime:string,
    prezime: string,
    lozinka: string,
    email: string,
    pol: string,
    telefon: string,
    jmbg:string ,
    datumRođenja :null,
    datumUpisa :null,
    idInstruktora: null,
    idGrupe : null
    
}

export class Candidate {
    constructor(public _id: string,
        public ime:string,
        public prezime: string,
        public lozinka: string,
        public email: string,
        public pol: string,
        public telefon: string,
        public jmbg:string ,
        public datumRođenja :null,
        public datumUpisa :null,
        public idInstruktora: null,
        public idGrupe : null){}
    }        