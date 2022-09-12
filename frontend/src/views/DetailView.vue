<script setup>
  import { RouterLink, useRoute } from 'vue-router'
  import { useFetch } from '../composables/fetch';

  const route = useRoute();
  const { data: pokemon } = useFetch(`/pokemons/${route.params.id}`);
</script>

<template>
  <div class="page">
    <template v-if="pokemon">
      <RouterLink class="link" :to="{ name: 'home' }">&laquo; Return to the list</RouterLink>
      <h1 class="title">{{ pokemon.name.english }}</h1>
      <h2 class="sub-title">{{ Object.values(pokemon.name).join(', ') }}</h2>
      <table class="my-5">
        <tbody>
          <tr v-for="statsValue, statsType in pokemon.base">
            <th class="px-2 text-left">{{ statsType }}</th>
            <td class="px-2 text-right">{{ statsValue }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-else>
      <h1 class="title">Loading...</h1>
    </template>
  </div>
</template>
