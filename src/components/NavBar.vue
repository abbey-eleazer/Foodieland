<script setup>
import 'primeicons/primeicons.css'
import { ref } from 'vue'

const isOpen = ref(false)

const close = () => {
  return (isOpen.value = false)
}
</script>

<template>
  <div
    class="fixed w-[99%] px-5 py-4 xl:w-[1440px] xl:px-20 xl:py-10 bg-white border-b-2 border-gray-100 z-100"
  >
    <nav class="flex items-center justify-between">
      <picture>
        <RouterLink to="/">
          <img src="../assets/Logo.png" alt="foodieland-logo" />
        </RouterLink>
      </picture>

      <!-- Nav links -->
      <ul class="hidden lg:flex lg:gap-15">
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/" active-class="border-b-2 border-amber-400">Home</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/recipes" active-class="border-b-2 border-amber-400"
            >Recipes</router-link
          >
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/blog" active-class="border-b-2 border-amber-400">Blog</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/contact" active-class="border-b-2 border-amber-400"
            >Contact</router-link
          >
        </li>
      </ul>

      <!-- Socials -->
      <div class="hidden lg:flex lg:gap-10">
        <img
          class="cursor-pointer hover:scale-105"
          src="../assets/001-facebook.png"
          alt="facebook"
        />
        <img class="cursor-pointer hover:scale-105" src="../assets/003-twitter.png" alt="twitter" />
        <img
          class="cursor-pointer hover:scale-105"
          src="../assets/004-instagram.png"
          alt="instagram"
        />
      </div>

      <!-- hamburgar menu  -->
      <div class="md:hidden">
        <i
          :class="isOpen ? 'pi pi-times' : 'pi pi-bars'"
          style="font-size: 2rem"
          class="cursor-pointer"
          @click="isOpen = !isOpen"
        ></i>
      </div>
    </nav>
  </div>

  <div v-if="isOpen" class="absolute z-[50]">
    <div class="bg-[#fff] w-[20rem] h-[30rem] flex flex-col gap-12 justify-center items-center">
      <ul class="pt-12 flex flex-col items-center justify-center text-xl gap-5 tracking-wide pl-4">
        <!-- Nav links -->
        <li
          @click="close"
          class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400"
        >
          <router-link to="/" active-class="border-b-2 border-amber-400">Home</router-link>
        </li>
        <li
          @click="close"
          class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400"
        >
          <router-link to="/recipes" active-class="border-b-2 border-amber-400"
            >Recipes</router-link
          >
        </li>
        <li
          @click="close"
          class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400"
        >
          <router-link to="/blog" active-class="border-b-2 border-amber-400">Blog</router-link>
        </li>
        <li
          @click="close"
          class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400"
        >
          <router-link to="/contact" active-class="border-b-2 border-amber-400"
            >Contact</router-link
          >
        </li>
      </ul>

      <!-- Socials -->
      <div class="flex gap-10">
        <img
          @click="close"
          class="cursor-pointer hover:scale-105"
          src="../assets/001-facebook.png"
          alt="facebook"
        />
        <img
          @click="close"
          class="cursor-pointer hover:scale-105"
          src="../assets/003-twitter.png"
          alt="twitter"
        />
        <img
          @click="close"
          class="cursor-pointer hover:scale-105"
          src="../assets/004-instagram.png"
          alt="instagram"
        />
      </div>
    </div>
  </div>
</template>
