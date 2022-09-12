const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

const pokemonsRouter = require('./routes/pokemons');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use('/api/pokemons', pokemonsRouter);
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err);
});

app.listen(process.env.PORT || 3000);

module.exports = app;
