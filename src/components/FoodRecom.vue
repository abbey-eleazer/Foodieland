<script lang="ts" setup>
import NoBgCard from './NoBgCard.vue';
import Fruit from 'src/assets/fruit salad.png'
import Beef from 'src/assets/beef.png'
import Fried from 'src/assets/fried rice.png'
import Taco from 'src/assets/taco.png'

const moreRecipes = [
  {
    url: Fruit,
    title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
    foodtype: 'Healthy',
  },
  {
    url: Beef,
    title: 'Big and Juicy Wagyu Beef Cheeseburger ',
    foodtype: 'Western ',
  },
  {
    url: Fried,
    title: 'Healthy Japanese Fried Rice with Asparagus',
    foodtype: 'Healthy',
  },
  {
    url: Taco,
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
