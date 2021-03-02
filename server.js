const express = require('express');
const app = express();

const config = require('./config');
const db = require('./config/database');

const userRouter = require('./routes/user');

const cors = (req, res, next) => {
    res.header('Access-Control-Allow_Methods', '*');
    res.header('Access-Control-Allow_Headers', '*');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors);

app.use('/user', userRouter);

app.listen(config.port, console.log('Server has started on http://localhost:%s', config.port));

// app.get('/', function(req, res) {
//     res.send('Home Page');
// })

