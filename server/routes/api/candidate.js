const express = require('express');
const router = express.Router();
const candidateController = require('../../controllers/candidateController')

router.get('/id/:id',candidateController.getCandidateById)
router.post('/',candidateController.addGroup)

module.exports = router;