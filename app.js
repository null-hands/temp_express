var express = require('express');
var path = require('path');
const cors = require('cors'); 
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const routes = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors()); //cors 解决跨域
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes)

module.exports = app;
