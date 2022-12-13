const path = require('node:path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30kb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (next) => {
  next();
});

module.exports = app;
