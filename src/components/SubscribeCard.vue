<script lang="ts" setup>
import ButtonComp from './ButtonComp.vue'
</script>

<template>
  <div class="relative w-full px-4 h-[28rem] my-[10rem] bg-primary rounded-4xl lg:rounded-[4rem] overflow-hidden">

    <div class="absolute top-10 left-0 lg:top-20 lg:left-1/4 w-full lg:w-[38rem] mx-auto text-center">
      <h2 class="heading_secondary">Deliciousness to your inbox</h2>
      <p class="mt-5 px-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis praesentium quis
        fugiat autem iure,
      </p>

      <!-- input  -->
      <div class="w-[90%] lg:w-[30rem] lg:h-[5rem] mx-auto p-2 mt-16 lg:bg-white rounded-3xl flex  flex-col items-center justify-between">
        <input type="text" placeholder="Your email address.." class=" w-[100%] lg:w-0 pl-4 outline-none h-[4rem] py-4 lg:py-0 bg-white lg:bg-none rounded-2xl " />
        <ButtonComp class=" mt-4">Subscribe</ButtonComp>
      </div>
    </div>

    <!-- bck images  -->
    <div class="hidden lg:flex items-end justify-between mt-[4.5rem]">
      <img src="../assets/inbox1.png" alt="" />
      <img src="../assets/inbox2.png" alt="" />
    </div>
  </div>
</template>
