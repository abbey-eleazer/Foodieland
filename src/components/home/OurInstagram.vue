<script setup>
import ButtonComp from '../ButtonComp.vue';


const images = [
  'http://localhost:5173/src/assets/post.png',
  'http://localhost:5173/src/assets/post2.png',
  'http://localhost:5173/src/assets/post3.png',
  'http://localhost:5173/src/assets/post4.png',
]

</script>

<template>
  <div class="w-[100%] xl:w-[1440px]  xl:ml-[-5rem] my-[10rem] bg-linear-180 from-white to-primary pb-12">
    <div class="text-center xl:w-[52rem] mx-auto">
      <h2 class="heading_secondary pb-5">
        Check out @foodieland on Instagram
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus at aperiam ut earum est quia! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </div>

    <div class="w-full xl:px-[4rem] flex flex-wrap flex-col md:flex-row items-center justify-center  my-18 gap-8 ">
      <div v-for="image in images" :key="image">
        <img :src="image" alt="">
      </div>
    </div>
    <ButtonComp class="mx-auto">
      Visit Our Instagram
      <img src="../../assets/004-instagram-white.png" alt="ig-logo">
    </ButtonComp>
  </div>
</template>
