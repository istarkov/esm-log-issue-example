const { routes } = require('esm')(module)('./routes');

module.exports.app = (req, res) => {
  routes(req, res);
};
