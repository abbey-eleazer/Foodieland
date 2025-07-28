<script setup></script>

<template>
  <div>
    <div class=" w-[90%] mx-auto lg:w-[1440px] lg:px-20 py-5 bg-white">
      <nav class="flex items-center justify-between border-b-2 border-gray-100 pb-12">
        <picture>
          <RouterLink to="/">
            <img src="../assets/Logo.png" alt="foodieland-logo" />
          </RouterLink>
          <p class="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dolor.
          </p>
        </picture>

        <!-- Nav links -->
        <ul class="hidden lg:flex gap-15">
          <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
            <router-link to="/recipes">Recipes</router-link>
          </li>
          <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
            <router-link to="/blog">Blog</router-link>
          </li>
          <li class="font-medium border-b-2 border-white hover:border-b-2 hover:border-amber-400">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>

    <!-- copy  -->
    <div class=" py-12 flex justify-center lg:justify-end gap-[20rem]">

      <p class="text-center ">&copy;2025 Flowbase.Powered by <span class="text-red-500">Webflow</span></p>

      <!-- Socials -->
      <div class="hidden px-18 lg:flex ">
        <div class="flex gap-10">
          <img
            class="cursor-pointer hover:scale-105"
            src="../assets/001-facebook.png"
            alt="facebook"
          />
          <img
            class="cursor-pointer hover:scale-105"
            src="../assets/003-twitter.png"
            alt="twitter"
          />
          <img
            class="cursor-pointer hover:scale-105 sm:bg-amber-50"
            src="../assets/004-instagram.png"
            alt="instagram"
          />
        </div>
      </div>
    </div>
  </div>
</template>
