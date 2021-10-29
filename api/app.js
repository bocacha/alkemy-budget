const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');
const errors = require('../src/utils/middlewares/errorHandler');
const headers = require('../src/utils/middlewares/setHeaders');
require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors());
server.use(errors);
server.use(headers);
server.use('/', routes);



module.exports = server;