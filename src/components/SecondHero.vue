<script setup>
import ButtonComp from './ButtonComp.vue'
</script>

<template>
  <div class="mt-32 flex flex-col-reverse lg:flex-row items-center justify-between">
    <!-- text  -->
    <div class="lg:w-[35rem] w-full mx-auto text-center lg:text-left">
      <h2 class="heading_secondary lg:leading-15 mt-16">Everyone can be a <br> chef in their own kitchen</h2>
      <p class="my-4 ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio natus accusamus unde doloribus corporis consequuntur!
      </p>
      <ButtonComp class="mt-12 mx-auto lg:mx-0 lg:mt-24">Learn More</ButtonComp>
    </div>

    <!-- image  -->
    <picture >
      <img src="../assets/chef.png" alt="chef" />
    </picture>
  </div>
</template>
