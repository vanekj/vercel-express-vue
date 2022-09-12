<template>
  <div v-if="pokemons" class="list">
    <RouterLink v-for="pokemon in pokemons" :key="'pokemon-' + pokemon.id" class="item" :to="'/' + pokemon.id">
      {{ pokemon.name.english }}
    </RouterLink>
  </div>
  <template v-else>
    <h1 class="title">Loading...</h1>
  </template>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { useFetch } from '../composables/fetch';

  const { data: pokemons } = useFetch('/pokemons');
</script>

<style>
  .list {
    @apply flex flex-wrap gap-2;
  }

  .item {
    @apply flex-1 py-2 px-4 border-green-200 border-2 rounded whitespace-nowrap text-center;
    @apply hover:bg-green-100;
  }
</style>