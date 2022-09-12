var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var pokemonsRouter = require('./routes/pokemons');

var app = express();

var publicPath = path.join(__dirname, 'public');
var rootHtml = path.join(publicPath, 'index.html');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicPath));

app.use('/api/pokemons', pokemonsRouter);
app.get('*', (req, res) => res.sendFile(rootHtml));

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
});

module.exports = app;
