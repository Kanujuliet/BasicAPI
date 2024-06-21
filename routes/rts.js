const express = require('express');
const routerManager = express.Router();
const {homefun,list,createUser} = require('../controllers/ctl')
routerManager.get('/',homefun)
routerManager.get('/list',list)
routerManager.get('/register',createUser)


module.exports={routerManager}