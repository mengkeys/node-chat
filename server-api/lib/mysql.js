'use strict';

const path = require('path');
const mysql = require('mysql');
const config = require(path.join(__dirname, '..', 'config'));
const option = config.mysql;

module.exports = mysql.createPool(option);
