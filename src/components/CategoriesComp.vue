<script setup>
import ButtonComp from './ButtonComp.vue';

const cards = [
  {
    url: '/src/assets/breakfast.png',
    text: 'Breakfast',
    bg: 'to-[#708246]/10',
  },
  {
    url: '/src/assets/vegan.png',
    text: 'Vegan',
    bg: 'to-[#6CC63F]/10',
  },
  {
    url: '/src/assets/meat.png',
    text: 'Meat',
    bg: 'to-[#CC261B]/10',
  },
  {
    url: '/src/assets/dessert.png',
    text: 'Dessert',
    bg: 'to-[#F09E00]/10',
  },
  {
    url: '/src/assets/lunch.png',
    text: 'Lunch',
    bg: 'to-[#000000]/10',
  },
  {
    url: '/src/assets/chocolate.png',
    text: 'Chocolate',
    bg: 'to-purple-500/10',
  },
]
</script>

<template>

  <div class="flex items-center justify-between mt-[9rem]">
    <h2 class="font-semibold text-2xl lg:text-[48px]">Categories</h2>
  <ButtonComp class="bg-primary ">
    <p class="text-black">
      View All Categories
    </p>
  </ButtonComp>
  </div>
  <div class="flex flex-wrap lg:flex-nowrap items-center lg:justify-between justify-center gap-2 my-10 lg:gap-0 lg:my-20">
    <div
      v-for="card in cards"
      :key="card.url"
      :class="`w-25 h-25 lg:w-45 lg:h-45 my-2 rounded-2xl lg:rounded-3xl bg-linear-to-b from-white from-40% ${card.bg} text-center font-semibold cursor-pointer hover:scale-105`"
    >
      <img class="mx-auto pl-8" :src="card.url" alt="" />
      <p>{{ card.text }}</p>
    </div>
  </div>

  <!-- <div class="flex items-center justify-between mt-[9rem]">
    <h2 class="font-semibold text-[48px]">Categories</h2>
  <ButtonComp class="bg-primary ">
    <p class="text-black">
      View All Categories
    </p>
  </ButtonComp>
  </div>
  <div class="flex items-center justify-between my-20">
    <div
      v-for="card in cards"
      :key="card.url"
      :class="`w-45 h-45 rounded-3xl bg-linear-to-b from-white from-40% ${card.bg} text-center font-semibold cursor-pointer hover:scale-105`"
    >
      <img class="mx-auto pl-8" :src="card.url" alt="" />
      <p>{{ card.text }}</p>
    </div>
  </div> -->
</template>
