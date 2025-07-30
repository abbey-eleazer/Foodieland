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
    class="w-full md:w-[21rem] lg:w-[25rem] md:h-[25rem] lg:h-[27.5rem] p-4 rounded-2xl bg-linear-to-b from-white from-30% to-primary cursor-pointer hover:scale-101"
  >
    <div class="px-4 md:px-0">
      <img class="rounded-2xl" :src="image" alt="recipe-image" />
      <p class=" text-[16.5px] md:text-2xl font-semibold tracking-tight py-6">{{ title }}</p>
      <div class="flex gap-5">
        <TimeCap />
        <FoodCap :txt="foodType" />
      </div>
    </div>
  </div>
</template>
