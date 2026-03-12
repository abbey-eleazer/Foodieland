<script setup>
import CardBck from '../CardBck.vue';
import Burgar from '../../assets/burgar.png'
import Salmon from '../../assets/salmon.png'
import Pancake from '../../assets/pancake.png'
import Salad from '../../assets/salad.png'
import Meatballs from '../../assets/meatballs.png'
import Orange from '../../assets/orange and blueberry.png'
import Chicken from '../../assets/chicken and rice.png'
import Bacon from '../../assets/bacon pasta.png'

const recipes = [
  {
    img: Burgar,
    title: 'Big and Juicy Wagyu Beef Cheeseburger',
    foodtype: 'snack',
  },
  {
    img: Salmon,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    foodtype: 'Fish',
  },
  {
    img: Pancake,
    title: 'Strawberry Oatmeal Pancake with Honey Syrup',
    foodtype: 'Breakfast',
  },
  {
    img: Salad,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    foodtype: 'Healthy',
  },
  {
    img: Meatballs,
    title: 'Chicken Meatballs with Cream Cheese',
    foodtype: 'Meat',
  },
]

const recipeTwo = [
  {
    img: Orange,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    foodtype: 'Sweet',
  },
  {
    img: Chicken,
    title: 'The Best Easy One Pot Chicken and Rice',
    foodtype: 'snack',
  },
  {
    img: Bacon,
    title: 'The Creamiest Creamy Chicken and Bacon Pasta',
    foodtype: 'Noodles  ',
  },
]
// import axiosClient from '../../axiosClient.js'
// import { ref, onMounted } from "vue";

// let movies = ref([]);

// onMounted(
//    async() => {
//     const res = await axiosClient.get('https://www.themealdb.com/api/json/v1/1/', {
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//       }
//     })
//     movies.value = res.data.data
//     // return movies.value
//     console.log(movies)
//   }
//   )
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
