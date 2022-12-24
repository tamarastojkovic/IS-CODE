const mongoose = require('mongoose');
const baseUsersSchema = require('./baseUserModel');

const instructorSchema = new baseUsersSchema({
    brojRačuna : {
        type: String,
        required: true
    },
    visinaPlate: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    datumZaposlenja: {
        type: Date,
        required: true
    }
});

const instructorModel = mongoose.model('Instructor', instructorSchema);

module.exports = instructorModel;