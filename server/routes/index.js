const statementRoutes = require('./statement_routes');
const transactionRoutes = require('./transactions/index');
const userRoutes = require('./users');


module.exports = function (app, db) {
    statementRoutes(app, db);
    transactionRoutes(app,db);
    userRoutes(app, db);
};