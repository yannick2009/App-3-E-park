const path = require('node:path');
const express = require('express');
const morgan = require('morgan');
const AppError = require('./utils/appError');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
  next(
    new AppError(
      `${req.originalUrl} n'existe pas sur notre SERVER`,
      404
    )
  );
});

module.exports = app;
