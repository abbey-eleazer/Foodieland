<script setup>
import ButtonComp from '../ButtonComp.vue';
import Breakfast from '../../assets/breakfast.png'
import Vegan from '../../assets/vegan.png'
import Meat from '../../assets/meat.png'
import Dessert from '../../assets/dessert.png'
import Lunch from '../../assets/lunch.png'
import Chocolate from '../../assets/chocolate.png'

const cards = [
  {
    id: 1,
    url: Breakfast,
    text: 'Breakfast',
    bg: 'to-[#708246]/10',
  },
  {
    id: 2,
    url: Vegan,
    text: 'Vegan',
    bg: 'to-[#6CC63F]/10',
  },
  {
    id: 3,
    url: Meat,
    text: 'Meat',
    bg: 'to-[#CC261B]/10',
  },
  {
    id: 4,
    url: Dessert,
    text: 'Dessert',
    bg: 'to-[#F09E00]/10',
  },
  {
    id: 5,
    url: Lunch,
    text: 'Lunch',
    bg: 'to-[#000000]/10',
  },
  {
    id: 6,
    url: Chocolate,
    text: 'Chocolate',
    bg: 'to-purple-500/10',
  },
]
</script>

<template>

  <div class="flex items-center justify-between mt-[9rem]">
    <h2 class="heading_secondary">Categories</h2>
  <ButtonComp class="bg-primary ">
    <p class="text-black">
      View All Categories
    </p>
  </ButtonComp>
  </div>
  <div class="flex flex-wrap lg:flex-nowrap items-center md:justify-between justify-center gap-2 lg:gap-3 my-10 lg:my-20">
    <div
      v-for="card in cards"
      :key="card.id"
      :class="`w-25 h-25 lg:w-45 lg:h-45 my-2 rounded-2xl lg:rounded-3xl bg-linear-to-b from-white from-40% ${card.bg} text-center font-semibold cursor-pointer hover:scale-105`"
    >
      <img class="mx-auto pl-8" :src='card.url' alt="" />
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
