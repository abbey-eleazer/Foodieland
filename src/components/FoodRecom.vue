<script lang="ts" setup>
import NoBgCard from './NoBgCard.vue';

const moreRecipes = [
  {
    url: '/src/assets/fruit salad.png',
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
    foodtype: 'Healthy',
  },
  {
    url: '/src/assets/beef.png',
    title: 'Big and Juicy Wagyu Beef Cheeseburger ',
    foodtype: 'Western ',
  },
  {
    url: '/src/assets/fried rice.png',
    title: 'Healthy Japanese Fried Rice with Asparagus',
    foodtype: 'Healthy',
  },
  {
    url: '/src/assets/taco.png',
    title: 'Cauliflower Walnut Vegetarian Taco Meat',
    foodtype: 'Eastern',
  },

]
</script>

<template>
  <div class="mb-32">
    <div class="heading_secondary text-center mb-10">
   <slot>
     <h2>You may like these recipe too</h2>
   </slot>
  </div>
   <div class="flex flex-wrap items-center justify-center gap-[2rem]">
      <div v-for="recipe in moreRecipes" :key="recipe.url" class="">
        <NoBgCard
          :image="`${recipe.url}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
        />
      </div>
    </div>
  </div>
</template>
