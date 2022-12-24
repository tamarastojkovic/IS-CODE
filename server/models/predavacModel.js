const mongoose = require('mongoose');
const baseUsersSchema = require('./baseUserModel');

const predavacSchema = new baseUsersSchema({
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

const predavacModel = mongoose.model('Predavač', predavacSchema);

module.exports = predavacModel;