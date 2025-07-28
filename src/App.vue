<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="w-[1440px] mx-auto ">
    <header>
      <NavBar />
    </header>
  <RouterView class="px-20 pt-[10rem] "/>
  </div>
</template>

<style scoped>
</style>
