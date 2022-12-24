const jwt = require('jsonwebtoken');
//secret generated with node module crypto
// function require('crypto').randomBytes(64).toString('hex')
const MY_SECRET = 'aaa5341e14b3b19364763b4c79fce15630190ba10b7d5c6b3a6d555a5aa032e3484a11804ba476537d19c7b3eb1a8cc51f6ccf119760f361b5e9795e50b5bb27';

module.exports.generateJWT = (data) => {
  return jwt.sign(data, MY_SECRET, { expiresIn: '7d' });
};

module.exports.verifyJWT = (token) => {
  return jwt.verify(token, MY_SECRET);
};