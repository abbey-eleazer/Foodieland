<script setup>
import NoBgCard from './NoBgCard.vue'

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
  {
    url: '/src/assets/rainbow chicken.png',
    title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
    foodtype: 'Healthy',
  },
  {
    url: '/src/assets/sandwich.png',
    title: 'Barbeque Spicy Sandwiches with Chips  ',
    foodtype: 'Snack ',
  },
  {
    url: '/src/assets/vegan lettuce.png',
    title: 'Firecracker Vegan Lettuce Wraps - Spicy! ',
    foodtype: 'Seafood',
  },
  {
    url: '/src/assets/ramen soup.png',
    title: 'Chicken Ramen Soup with Mushroom ',
    foodtype: 'Japanese',
  },
]
</script>

<template>
  <div class="mb-32">
    <div class="mb-18 flex flex-col lg:flex-row items-center justify-between">
      <h2 class="heading_secondary text-center lg:text-left lg:leading-12 tracking-tight flex-1">Try this delicious recipe <br> to make your day</h2>
      <p class="flex-1 text-center lg:text-left pt-4 lg:pt-0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus delectus, mollitia,
        fugiat debitis quos, accusamus ipsam aliquid nobis non aut sequi  modi.
      </p>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-[2rem]">
      <div v-for="recipe in moreRecipes" :key="recipe" class="">
        <NoBgCard
          :image="`${recipe.url}`"
          :title="`${recipe.title}`"
          :foodType="`${recipe.foodtype}`"
        />
      </div>
    </div>
  </div>
</template>
