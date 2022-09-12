const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const pokemons = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/pokemons.json'), 'utf-8'));
  res.json(pokemons);
});

router.get('/:id', function(req, res, next) {
  const pokemons = JSON.parse(fs.readFileSync(path.join(__dirname, '../database/pokemons.json'), 'utf-8'));
  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(req.params.id));
  res.json(pokemon);
});

module.exports = router;
