<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="page">
    <h1 class="title">Page not found</h1>
    <RouterLink class="link" :to="{ name: 'home' }">Return to the list</RouterLink>
  </div>
</template>
