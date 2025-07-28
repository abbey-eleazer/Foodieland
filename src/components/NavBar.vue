<script setup></script>

<template>
  <div class="fixed w-[99%] px-5 py-4 lg:w-[1440px] lg:px-20 lg:py-10 bg-white border-b-2 border-gray-100 z-100">
    <nav class="flex items-center justify-between ">
      <picture>
        <RouterLink to="/">
          <img src="../assets/Logo.png" alt="foodieland-logo" />
          </RouterLink>
      </picture>

      <!-- Nav links -->
      <ul class="hidden lg:flex lg:gap-15 ">
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/" active-class="border-b-2 border-amber-400">Home</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/recipes" active-class="border-b-2 border-amber-400">Recipes</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/blog" active-class="border-b-2 border-amber-400">Blog</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/contact" active-class="border-b-2 border-amber-400">Contact</router-link>
        </li>
      </ul>

      <!-- Socials -->
      <div class="hidden lg:flex lg:gap-10 ">
        <img class="cursor-pointer hover:scale-105" src="../assets/001-facebook.png" alt="facebook" />
        <img  class="cursor-pointer hover:scale-105" src="../assets/003-twitter.png" alt="twitter" />
        <img  class="cursor-pointer hover:scale-105" src="../assets/004-instagram.png" alt="instagram" />
      </div>
    </nav>
  </div>


  <!-- <div class="fixed w-[1440px] px-20 py-10 bg-white border-b-2 border-gray-100 z-100">
    <nav class="flex items-center justify-between ">
      <picture>
        <RouterLink to="/">
          <img src="../assets/Logo.png" alt="foodieland-logo" />
          </RouterLink>
      </picture> -->

      <!-- Nav links -->
      <!-- <ul class="flex gap-15 ">
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/" active-class="border-b-2 border-amber-400">Home</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/recipes" active-class="border-b-2 border-amber-400">Recipes</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/blog" active-class="border-b-2 border-amber-400">Blog</router-link>
        </li>
        <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
          <router-link to="/contact" active-class="border-b-2 border-amber-400">Contact</router-link>
        </li>
      </ul> -->

      <!-- Socials -->
      <!-- <div class="flex gap-10 ">
        <img class="cursor-pointer hover:scale-105" src="../assets/001-facebook.png" alt="facebook" />
        <img  class="cursor-pointer hover:scale-105" src="../assets/003-twitter.png" alt="twitter" />
        <img  class="cursor-pointer hover:scale-105" src="../assets/004-instagram.png" alt="instagram" />
      </div>
    </nav>
  </div> -->
</template>
