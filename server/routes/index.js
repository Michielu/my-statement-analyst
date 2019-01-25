const statementRoutes = require('./statement_routes');
const userRoutes = require('./users');

module.exports = function (app, db) {
    statementRoutes(app, db);
    userRoutes(app, db);
};