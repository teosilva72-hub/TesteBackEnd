const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const RouterUser = require('../Router/User/RouterUser');
const RouterAddress = require('../Router/Address/AddressUser');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(RouterUser, RouterAddress);

const PORT = process.env.PORT || 3005;
app.listen(PORT, (error)=>{
    if(error) console.log('Error no servidor');
    else console.log(`Servidor Rodando localhost:${PORT}`);
});