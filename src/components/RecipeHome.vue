<script setup>
import CardBck from './CardBck.vue'

const recipes = [
  {
    img: '/src/assets/burgar.png',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    foodtype: 'snack',
  },
  {
    img: '/src/assets/salmon.png',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    foodtype: 'Fish',
  },
  {
    img: '/src/assets/pancake.png',
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    foodtype: 'Breakfast',
  },
  {
    img: '/src/assets/salad.png',
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    foodtype: 'Healthy',
  },
  {
    img: '/src/assets/meatballs.png',
    title: 'Chicken Meatballs with Cream Cheese',
    foodtype: 'Meat',
  },
]

const recipeTwo = [
  {
    img: '/src/assets/orange and blueberry.png',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    foodtype: 'Sweet',
  },
  {
    img: '/src/assets/chicken and rice.png',
    title: 'The Best Easy One Pot Chicken and Rice',
    foodtype: 'snack',
  },
  {
    img: '/src/assets/bacon pasta.png',
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    foodtype: 'Noodles ',
  },
]
</script>

<template>
  <div>
    <div class="text-center mt-32 mb-12">
      <h2 class="font-semibold text-[48px]">Simple and tasty recipes</h2>
      <p class="w-[43rem] mx-auto py-4">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
    </div>

    <!-- cards -->
    <div class="flex flex-wrap gap-[2.5rem]">
      <div v-for="recipe in recipes" :key="recipe">
        <CardBck
          :image="`${recipe.img}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
        />
      </div>

      <!-- ads  -->
      <div>
        <img src="../assets/foodieland ads.png" alt="ads" />
      </div>

      <!-- cards -->
      <div v-for="recipe in recipeTwo" :key="recipe">
        <CardBck
          :image="`${recipe.img}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
        />
      </div>
    </div>
  </div>
</template>
