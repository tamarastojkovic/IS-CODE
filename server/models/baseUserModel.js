const mongoose = require('mongoose')

const baseUserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime : {
        type: String,
        required: true
    },
    prezime: {
        type: String,
        required: true
    },
    lozinka: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    pol: {
        type: String,
        required: true
    },
    telefon: {
        type: String,
        required: true
    },
    jmbg: {
        type: String,
        required: true
    }
    
})

const baseUserModel = mongoose.model('BaseUser',baseUserSchema);
module.exports = baseUserModel;