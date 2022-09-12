<script setup>
  import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style>
  .wrapper {
    @apply p-2;
  }

  .page {
    @apply h-screen p-5 flex flex-col items-center justify-center text-center;
  }

  .title {
    @apply p-2 text-3xl font-bold;
  }

  .sub-title {
    @apply -mt-1 text-xs;
  }

  .link {
    @apply py-1 px-2 rounded text-green-400;
    @apply hover:bg-green-100 hover:text-green-500;
  }
</style>