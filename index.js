const fs = require('fs');
const path = require('path');
const { routes } = require('./esm')(module)('./routes');

module.exports.app = (req, res) => {
  if (!req.path) req.url = `/${req.url}`;

  console.log('111 a non esm hello');

  return routes(req, res);
};

// 1
