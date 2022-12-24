const express = require('express');
const router = express.Router();
const candidateController = require('../../controllers/candidateController')
const authentication = require('../../utils/authentication')

router.get('/id/:id', authentication.isAuthenticated, candidateController.getCandidateById)
router.post('/group', authentication.isAuthenticated, candidateController.addGroup)

router.post("/new", candidateController.putCandidate);
router.post("/login", candidateController.loginUser);

module.exports = router;