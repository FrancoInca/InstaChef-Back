const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index');

require('./db.js');

const server = express();

server.name = 'API';
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Acces-Controll-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use('/', routes);

server.use((err, req, res, next) => {
  //eslint-disable-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.log(err);
  res.status(status).send(message);
});

module.exports = server;
