const express = require('express');
const { urlencoded, json } = require('body-parser');

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST'
    );

    return res.status(200).json({});
  }

  next();
});

const candidateRoutes = require('./routes/api/candidate');
app.use('/candidate', candidateRoutes);

const groupRoutes = require('./routes/api/group');
app.use('/group', groupRoutes);

app.use(function (req, res, next) {
  const error = new Error('Zahtev nije podrzan!');
  error.status = 405;

  next(error);
});

app.use(function (error, req, res, next) {
  const statusCode = error.status || 500;
  res.status(statusCode).json({
    error: {
      message: error.message,
      status: statusCode,
      stack: error.stack,
    },
  });
});

module.exports = app;