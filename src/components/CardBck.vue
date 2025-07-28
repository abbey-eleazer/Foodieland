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
    class="w-[25rem] h-[27.2rem] p-4 rounded-2xl bg-linear-to-b from-white from-30% to-primary cursor-pointer hover:scale-101"
  >
    <div>
      <img class="rounded-2xl " :src="image" alt="recipe-image" />
      <p class="text-2xl font-semibold py-6">{{ title }}</p>
      <div class="flex gap-5">
        <TimeCap />
        <FoodCap :txt="foodType" />
      </div>
    </div>
  </div>
</template>
