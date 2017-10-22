module.exports = require(require('path').join(__dirname, ['config', process.env.NODE_ENV || 'development', 'json'].join('.')));
