const express = require('express');
const jwt = require('./jwt');
/**
 * Funkcija srednjeg sloja koja proverava da li je JWT token koji je klijent poslao validan.
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
module.exports.isAuthenticated = async (req, res, next) => {
  try {
    // Ocekujemo da klijent uz svoj zahtev prosledi HTTP zaglavlje oblika:
    // "Authorization": "Bearer <JWT>"
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      const error = new Error('You need to pass Authorization header with your request!');
      error.status = 403;
      throw error;
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verifyJWT(token);
    if (!decodedToken) {
      const error = new Error('Not Authenticated!');
      error.status = 401;
      throw error;
    }

    
    next();
  } catch (err) {
    next(err);
  }
};
