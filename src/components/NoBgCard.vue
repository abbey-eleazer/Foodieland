<script setup>
import FoodCap from './FoodCap.vue'
import TimeCap from './TimeCap.vue'

defineProps({
  image: String,
  title: String,
  foodType: String,

})
</script>

<template>
  <div
class="w-[18rem] h-[19.5rem] p-2 cursor-pointer hover:scale-101"
  >
    <div>
      <img class="rounded-2xl " :src="image" alt="recipe-image" />
      <p class="w-[18rem] text-lg font-semibold py-6">{{ title }}</p>
      <div class="flex gap-5">
        <TimeCap />
        <FoodCap :txt="foodType" />
      </div>
    </div>
  </div>
</template>
