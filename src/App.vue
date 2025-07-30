<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterNav from './components/FooterNav.vue';
</script>

<template>
  <div class="lg:max-w-[1440px] mx-auto flex flex-col justify-between">
    <header>
      <NavBar />
    </header>
    <main>
      <RouterView class="px-5 pt-[4rem] md:px-10 xl:px-20 lg:pt-[10rem]" />
    </main>
    <footer>
      <FooterNav />
    </footer>
  </div>
</template>

<style scoped></style>
