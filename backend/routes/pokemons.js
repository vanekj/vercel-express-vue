var path = require('path');
var fs = require('fs');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var pokemons = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/pokemons.json'), 'utf-8'));
  res.json(pokemons);
});

router.get('/:id', function(req, res, next) {
  var pokemons = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/pokemons.json'), 'utf-8'));
  var pokemon = pokemons.find((pokemon) => pokemon.id === Number(req.params.id));
  res.json(pokemon);
});

module.exports = router;
