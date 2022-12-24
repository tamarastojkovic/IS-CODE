const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    brojKandidata : {
        type: Number,
        required: true
    },
    idPredavača: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Predavač"
    }]
    
})

const groupModel = mongoose.model('Group', groupSchema);
module.exports = groupModel;