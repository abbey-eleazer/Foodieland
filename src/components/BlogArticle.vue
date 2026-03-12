<script setup>
import ButtonComp from '@/components/ButtonComp.vue'
import ThirdCard from '@/components/ThirdCard.vue'
import Ads4 from 'src/assets/ads4.png'
import Ads5 from 'src/assets/ads5.png'
import Ads6 from 'src/assets/ads6.png'
import Art1 from 'src/assets/art1.png'
import Art2 from 'src/assets/art2.png'
import Art3 from 'src/assets/art3.png'
import Art4 from 'src/assets/art4.png'
import Art5 from 'src/assets/art5.png'
import Art6 from 'src/assets/art6.png'
import Auth1 from 'src/assets/auth1.png'
import Auth2 from 'src/assets/auth2.png'
import Auth3 from 'src/assets/auth3.png'
import Auth4 from 'src/assets/auth4.png'
import Auth5 from 'src/assets/auth5.png'
import Auth6 from 'src/assets/auth6.png'

const ads = [
  {
    img: Ads4,
    title: 'Chicken Meatballs with Cream Cheese ',
    author: 'By Andreas Paula',
  },
  {
    img: Ads5,
    title: ' Traditional Bolognaise Ragu',
    author: 'By Andreas Paula',
  },
  {
    img: Ads6,
    title: 'Pork and Chive Chinese Dumplings',
    author: 'By Andreas Paula',
  },
]

const posts = [
  {
    image: Art1,
    title: 'Crochet Projects for Noodle Lovers',
    text: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqut enim ',
    author: {
      img: Auth1,
      name: 'Wade Warren',
      date: '12 November 2021',
    },
  },

  {
    image: Art2,
    title: '10 Vegetarian Recipes To Eat This Month',
    text: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqut enim ',
    author: {
      img: Auth3,
      name: 'Robert Fox',
      date: '12 November 2021',
    },
  },
  {
    image: Art3,
    title: 'Full Guide to Becoming a Professional Chef',
    text: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqut enim ',
    author: {
      img: Auth4,
      name: 'Dianne Russell',
      date: '12 November 2021',
    },
  },
  {
    image: Art4,
    title: 'Simple & Delicious Vegetarian Lasagna',
    text: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqut enim ',
    author: {
      img: Auth5,
      name: 'Leslie Alexander',
      date: '12 November 2021',
    },
  },
   {
    image: Art6,
    title: 'Plantain and Pinto Stew with Aji Verde',
    text: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqut enim ',
    author: {
      img: Auth2,
      name: 'Courtney Henry',
      date: '12 November 2021',
    },
  },
  {
    image: Art5,
    title: 'We’re Hiring a Communications Assistant!',
    text: 'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqut enim ',
    author: {
      img: Auth6,
      name: 'Albert Flores',
      date: '12 November 2021',
    },
  },
]

const buttons = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "...",
  ">",
]
</script>

<template>
  <div class="w-full flex items-center justify-center text-center">
    <div>
      <h1 class="heading my-6">Blog & Article</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio dolores. Laboriosam
        consectetur dolore saepe!
      </p>
      <div class="w-full flex items-center justify-center my-20">
        <div
          class="w-full md:w-[43rem] border-2 border-gray-200 rounded-3xl p-2 flex items-center justify-between"
        >
          <input class="ml-4" type="text" placeholder="Search article, news or recipe" />
          <ButtonComp>Search</ButtonComp>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify- flex-col lg:flex-row ">
    <!-- posts  -->
    <div class="w-[52.5rem]">
      <div v-for="post in posts" :key="post.author">
        <ThirdCard class="items-start justify-center flex-col md:flex-row">
          <img :src="post.image" alt="" />
          <div>
            <p class="font-semibold text-xl">{{ post.title }}</p>
            <p class="w-[380px] text-gray-500 py-5">{{ post.text }}</p>
            <div class="flex items-center gap-2 mt-8">
              <img :src="post.author.img" alt="" />
              <p class="font-semibold">{{ post.author.name }}</p>
              <div class="border-l-2 border-gray-100 h-10 mx-1 md:mx-3"></div>
              <p class="text-sm">{{ post.author.date }}</p>
            </div>
          </div>
        </ThirdCard>
      </div>
    </div>

    <!-- ads  -->
    <div class="w-[25rem] px-4">
      <p class="font-semibold text-xl md:text-2xl py-5">Other Recipe</p>
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
        <img src="../assets/foodieland ads.png" alt="" />
      </div>
    </div>
  </div>

  <!-- filter buttons  -->
   <div class="flex gap-4 justify-center mt-12">
    <div v-for="btn in buttons" :key="btn">
      <div class="w-13 h-13 rounded-2xl flex items-center justify-center font-semibold hover:text-white hover:bg-black bg-white border-2 border-gray-300 text-black ">{{ btn}}</div>
    </div>
   </div>
</template>
