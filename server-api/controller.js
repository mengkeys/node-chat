'use strict';

const path = require('path');
const dir  = path.join(__dirname, 'controllers');
const fs   = require('fs');
const controllers = {};

const files = fs.readdirSync(dir);

files.forEach(function(item){
    controllers[item.split('.')[0]] = require(path.join(dir, item));
});


module.exports = controllers;