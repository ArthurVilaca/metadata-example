const express = require('express');
const rootRouter = express.Router();

const search = require('./search.route');

rootRouter.get('/', function (req, res, next) {
  res.send('it works');
});

rootRouter.use('/search', search);

module.exports = rootRouter