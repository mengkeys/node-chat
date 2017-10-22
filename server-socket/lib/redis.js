const redis = require('redis');
const path  = require('path');
const config = require(path.join(__dirname, '..', 'config'));
module.exports = redis.createClient(config.redis);
