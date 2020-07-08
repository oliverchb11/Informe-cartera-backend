const express = require('express');
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const router = require('./routers/router')
const cors = require('cors');
//SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDLLEWARES
app.use(cors({ origin: 'http://localhost:4200' }))
app.use(express.json())
app.use(morgan('dev'));
//conexion a la DB mysql
app.use(
    myConnection(
        mysql, {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'vitalplu_testprogramacion'
        },
        'single'
    )
);
//ROUTER
app.use('/', router);

//CREACION SERVER
app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto', app.get('port'));
})