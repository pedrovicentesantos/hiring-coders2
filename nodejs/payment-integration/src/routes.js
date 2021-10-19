const { Router } = require('express');

const PurchaseController = require('./controllers/PurchaseController');
const StatusController = require('./controllers/StatusController');

const routes = new Router();

routes.post('/purchases', PurchaseController.store);
routes.get('/purchases/:id/status', StatusController.show);

module.exports = routes;
