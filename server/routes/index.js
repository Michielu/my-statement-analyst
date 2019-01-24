const statementRoutes = require('./statement_routes');

module.exports = function(app, db) {
    statementRoutes(app, db);
};