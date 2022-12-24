const express = require('express');
const router = express.Router();
const groupController = require('../../controllers/groupController')

router.get('/',groupController.getAllGroups)

module.exports = router;