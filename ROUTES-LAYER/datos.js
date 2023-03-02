const  Router = require('express')
const routerDatos = new Router()
const routes = require("../CONTROLLER-LAYER/datos.js");
const passport = require("passport");

//-----------ROUTES
//INDEX
routerDatos.get('/', routes.getRoute);

//LOGIN
routerDatos.get('/login', routes.getLogin);
routerDatos.get('/failLogin', routes.getFailLogin);
routerDatos.post('/login', passport.authenticate('login', { failureRedirect: '/failLogin' }), routes.postLogin);

//SIGNUP
routerDatos.get('/signup', routes.getSignUp);
routerDatos.get('/failSignUp', routes.getFailSignUp);
routerDatos.post('/signup', passport.authenticate('signup', { failureRedirect: '/failSignUp' }), routes.postSignUp);

//LOGOUT
routerDatos.get('/logout', routes.getLogout);

//GET INFO
routerDatos.get('/info', routes.getInfo);

routerDatos.get('/datos', (req, res) => {
  console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
  res.send(`Servidor express <span style="color:blueviolet;">(Nginx)</span> en ${PORT} - 
    <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`);
});

//FAILROUTE
routerDatos.get('*', routes.failRoute);

module.exports = routerDatos
