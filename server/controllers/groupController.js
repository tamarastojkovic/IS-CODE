const Group = require('../models/groupModel')
const mongoose = require('mongoose')

const getAllGroups = async (req,res,next) => {
    try {
        const group = await Group.find({brojKandidata: { $lt: 15 }}).exec();
      
        res.status(200).json(group);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllGroups
}