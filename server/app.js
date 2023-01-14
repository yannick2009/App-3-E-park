const path = require('node:path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./utils/appError');
const globalError = require('./controllers/errorController');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30kb' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.all('*', (req, res, next) => {
  next(
    new AppError(
      `${req.originalUrl} n'existe pas sur notre SERVER`,
      404
    )
  );
});

app.use(globalError);

module.exports = app;
