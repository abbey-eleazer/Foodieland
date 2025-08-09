<script lang="ts" setup>
import ThirdCard from '../ThirdCard.vue'

const ads = [
  {
    img: '/src/assets/ads1.png',
    title: 'Chicken Meatball with Creamy Chees...',
    author: 'By Andreas Paula',
  },
  {
    img: '/src/assets/ads2.png',
    title: 'The Creamiest Creamy Chicken an...',
    author: 'By Andreas Paula',
  },
  {
    img: '/src/assets/ads3.png',
    title: 'The Best Easy One Pot Chicken and Rice ',
    author: 'By Andreas Paula',
  },
]
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between">
    <div class="w-full md:w-[38rem] xl:w-[50rem]">
      <div>
        <p class="font-semibold text-xl md:text-2xl py-5">Ingredients</p>
        <div>
          <p class="font-semibold text-lg">For main dish</p>
          <ul>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>

          <p class="font-semibold text-lg">For the sauce</p>
          <ul>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li class="flex items-center gap-3 border-b-2 border-gray-200 py-4">
              <div class="w-5 h-5 rounded-full border-1"></div>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </div>
      </div>

      <!-- Directions  -->
      <div>
        <p class="font-semibold text-xl md:text-2xl py-5">Directions</p>
        <ol>
          <div>
            <li class="border-b-2 border-gray-200 py-10">
              <div class="flex gap-5">
                <div class="w-5 h-5 rounded-full border-1"></div>
                <p class="font-semibold text-xl">1. Lorem ipsum dolor sit amet</p>
              </div>
              <div class="ml-10">
                <p class="py-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
                <img class="py-8" src="../../assets/cooking.png" alt="" />
                <p class="py-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
            </li>
            <li class="border-b-2 border-gray-200 py-10">
              <div class="flex gap-5">
                <div class="w-5 h-5 rounded-full border-1"></div>
                <p class="font-semibold text-xl">2. Lorem ipsum dolor sit amet</p>
              </div>
              <div class="ml-10">
                <p class="py-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
            </li>
            <li class="border-b-2 border-gray-200 py-10">
              <div class="flex gap-5">
                <div class="w-5 h-5 rounded-full border-1"></div>
                <p class="font-semibold text-xl">3 . Lorem ipsum dolor sit amet</p>
              </div>
              <div class="ml-10">
                <p class="py-4">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
            </li>
          </div>
        </ol>
      </div>
    </div>

    <!-- ads  -->
    <div class="w-[25rem] px-4">
      <p  class="font-semibold text-xl md:text-2xl py-5">Other Recipe</p>
      <div v-for="item in ads" :key="item.author">
        <ThirdCard>
          <img :src="item.img" alt="" />
          <div>
            <p class="font-semibold">{{ item.title }}</p>
            <span class="text-sm">{{ item.author }}</span>
          </div>
        </ThirdCard>
      </div>
      <div>
        <img src="../../assets/foodieland ads.png " alt="">
      </div>
    </div>
  </div>
</template>
