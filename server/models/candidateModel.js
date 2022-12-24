const mongoose = require('mongoose');
const baseUsersSchema = require('./baseUserModel');

const candidateSchema = new baseUsersSchema({
    datumRođenja : {
        type: String,
        required: true
    },
    datumUpisa: {
        type: String,
        required: true
    },
    idInstruktora: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructor"
    }],
    idGrupe: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Group"
    }]
});

const candidateModel = mongoose.model('Candidate', candidateSchema);

module.exports = candidateModel;