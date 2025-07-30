<script setup>
import FoodCap from '../FoodCap.vue'
import TimeCap from '../TimeCap.vue'

const nutrients = [
  {
    name: 'Calories',
    value: '219.9 kcal',
  },
  {
    name: 'Total Fat',
    value: '10.7 g',
  },
  {
    name: 'Protein',
    value: '27.9 g',
  },
  {
    name: 'Carbohydrate',
    value: '22.3 g',
  },
  {
    name: 'Cholesterol',
    value: '37.4 mg',
  },
]
</script>

<template>
  <div>
    <div class="md:flex items-center justify-between">
      <div class="mb-8">
        <h1 class="heading">Healthy Japanese Fried Rice</h1>
        <div class="flex justify-center md:justify-between gap-1 items-center flex-wrap mt-8">
          <div class="flex gap-2">
            <img class="w-10 h-10 md:w-15 md:h-15" src="../../assets/john.png" alt="profile-pic" />
            <div>
              <p class="font-semibold">John Smith</p>
              <span class="text-[14px] text-gray-500">15 March 2022</span>
            </div>
          </div>
          <div class="border-l-2 border-gray-100 h-12 mx-3 md:mx-5"></div>

          <TimeCap>
            <div>
              <p class="uppercase font-semibold">prep time</p>
              <span>15 Minutes</span>
            </div>
          </TimeCap>
          <div class="border-l-2 border-gray-100 h-12 mx-3 md:mx-5"></div>
          <TimeCap>
            <div>
              <p class="uppercase font-semibold">cook time</p>
              <span>15 Minutes</span>
            </div>
          </TimeCap>
          <div class="border-l-2 border-gray-100 h-12 mx-3 md:mx-5"></div>

          <FoodCap txt="Chicken" />
        </div>
      </div>

      <div class="flex items-center gap-3 lg:gap-8 mb-5">
        <div class="w-15 xl:w-20">
          <div class="w-15 xl:w-20 h-15 xl:h-20 rounded-full bg-primary flex items-center justify-center">
            <img src="../../assets/printer.png" alt="printer-icon" />
          </div>
          <p class="font-semibold text-sm text-center pt-2">PRINT</p>
        </div>
        <div class="w-15 xl:w-20">
          <div class="w-15 xl:w-20 h-15 xl:h-20 rounded-full bg-primary flex items-center justify-center">
            <img src="../../assets/share.png" alt="share-icon" />
          </div>
          <p class="font-semibold text-sm text-center pt-2">SHARE</p>
        </div>
      </div>
    </div>

    <!-- DISPLAY  -->
    <div class="flex flex-col lg:flex-row items-center justify-between gap-8 ">
      <div>
        <img src="../../assets/video-img.png" alt="video">
      </div>
      <div class="w-[22rem] xl:w-[25rem] xl:h-[37.5rem] bg-primary rounded-3xl p-4 lg:p-8">
        <p class="font-semibold pb-4 md:text-2xl">
          Nutritional Information
        </p>
        <ul >
          <li v-for="item in nutrients" :key="item" class="w-full flex items-center justify-between py-2 border-b-1 border-gray-200">
            <p> {{ item.name }}</p>
            <span>{{ item.value }}</span>
          </li>
        </ul>

        <p class="mt-[5rem] lg:mt-[10rem]">
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>

    <!-- DISCRIPTION  -->
    <div class="my-12 xl:my-24 ">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>
