const { Router } = require('express');
const UserControl = require('./controllers/UserControl');
const CoinControl = require('./controllers/CoinControl');

const routes = Router();

routes.post('/users', UserControl.createUser);

routes.post('/auth', UserControl.authUser);

routes.get('/top10', CoinControl.top10);

routes.get('/mycoin', CoinControl.myCoin);

module.exports = routes;