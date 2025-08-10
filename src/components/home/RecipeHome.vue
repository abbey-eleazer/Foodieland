<script setup>
import CardBck from '../CardBck.vue'

const recipes = [
  {
    img: 'http://localhost:5173/src/assets/burgar.png',
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    foodtype: 'snack',
  },
  {
    img: 'http://localhost:5173/src/assets/salmon.png',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    foodtype: 'Fish',
  },
  {
    img: 'http://localhost:5173/src/assets/pancake.png',
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    foodtype: 'Breakfast',
  },
  {
    img: 'http://localhost:5173/src/assets/salad.png',
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    foodtype: 'Healthy',
  },
  {
    img: 'http://localhost:5173/src/assets/meatballs.png',
    title: 'Chicken Meatballs with Cream Cheese',
    foodtype: 'Meat',
  },
]

const recipeTwo = [
  {
    img: 'http://localhost:5173/src/assets/orange and blueberry.png',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    foodtype: 'Sweet',
  },
  {
    img: 'http://localhost:5173/src/assets/chicken and rice.png',
    title: 'The Best Easy One Pot Chicken and Rice',
    foodtype: 'snack',
  },
  {
    img: 'http://localhost:5173/src/assets/bacon pasta.png',
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    foodtype: 'Noodles  ',
  },
]
</script>

<template>
  <div>
    <div class="text-center mt-32 mb-12">
      <h2 class="heading_secondary">Simple and tasty recipes</h2>
      <p class="lg:w-[43rem] mx-auto py-4">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
    </div>

    <!-- cards -->
    <div class="w-full flex flex-wrap gap-[1rem] justify-center lg:gap-[1.5rem]">
      <div v-for="recipe in recipes" :key="recipe">
        <CardBck
          :image="`${recipe.img}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
        />
      </div>

      <!-- ads  -->
      <div>
        <img class="md:w-[21rem] lg:w-[25rem]" src="../../assets/foodieland ads.png" alt="ads" />
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

  <!-- <div>
    <div class="text-center mt-32 mb-12">
      <h2 class="heading_secondary">Simple and tasty recipes</h2>
      <p class="w-[43rem] mx-auto py-4">
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqut enim ad minim
      </p>
    </div> -->

    <!-- cards -->
    <!-- <div class="flex flex-wrap gap-[2.5rem]">
      <div v-for="recipe in recipes" :key="recipe">
        <CardBck
          :image="`${recipe.img}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
          class="`${textSize: text-2xl, width: w-[25rem]}`"
        />
      </div> -->

      <!-- ads  -->
      <!-- <div>
        <img src="../assets/foodieland ads.png" alt="ads" />
      </div> -->

      <!-- cards -->
      <!-- <div v-for="recipe in recipeTwo" :key="recipe">
        <CardBck
          :image="`${recipe.img}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
        />
      </div>
    </div>
  </div> -->
</template>
