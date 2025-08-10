<script setup>
import ButtonComp from '../ButtonComp.vue'
import FoodCap from '../FoodCap.vue'
import TimeCap from '../TimeCap.vue'
</script>

<template>
  <div class="w-full bg-primary rounded-3xl lg:rounded-[3rem]">
    <div class="relative z-20 flex flex-col-reverse lg:flex-row">
      <!-- badge  -->
      <div class="absolute top-1 left-[0rem] lg:top-13 lg:left-[45%]">
        <img class="w-[6rem] xl:w-[10rem]" src="../../assets/Badge.png" alt="badge-img" />
      </div>

      <!-- text  -->
      <div class="w-full md:w-[40rem] xl:w-[40rem] p-4 xl:p-12 flex flex-col justify-between">
        <div>
          <div class="w-[10rem] px-4 py-2 mb-8 rounded-4xl bg-white shadow-lg">📜 Hot Recipes</div>

          <h1 class="text-4xl md:text-[2.8rem] xl:text-6xl font-semibold tracking-tight">
            Spicy delicious chicken wings
          </h1>
          <p class="py-4 lg:py-8 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptate illum,
            doloribus esse aliquid laborum error distinctio.
          </p>

          <div class="flex gap-3">
            <TimeCap class="w-33 h-10 flex justify-center rounded-4xl bg-gray-400/10" />
            <FoodCap
              txt="Chicken"
              class="w-33 h-10 flex justify-center rounded-4xl bg-gray-400/10"
            />
          </div>
        </div>

        <!-- profile-pic and button  -->
        <div class="py-5 flex items-center justify-between lg:gap-4">
          <div class="flex">
            <img class="w-10 h-10 md:w-15 md:h-15" src="../../assets/john.png" alt="profile-pic" />
            <div>
              <p class="font-semibold">John Smith</p>
              <span class="text-[14px] text-gray-500">15 March 2022</span>
            </div>
          </div>

          <div>
            <ButtonComp>
              <p>View Recipes</p>
              <img src="../../assets/PlayCircle.png" alt="play-icon" />
            </ButtonComp>
          </div>
        </div>
      </div>

      <!-- img  -->
      <picture>
        <img class="md:w-full" src="../../assets/Hero.png" alt="spicy-chicken" />
      </picture>
    </div>
  </div>

  <!-- <div class=" w-[80rem] h-[40rem] bg-primary rounded-[3rem]">

    <div class="absolute z-1 left-[14.59rem] top-[11rem] w-[1440px] mx-auto flex items-center justify-between">
      <div class="w-10 h-[37rem] bg-primary rounded-r-[3rem]"></div>
      <div class="w-10 h-[37rem] bg-primary rounded-l-[3rem]"></div>
    </div>
    <div class="relative z-20 flex">
      <div class="absolute top-13 left-[45%]">
        <img src="../assets/Badge.png" alt="badge-img">
      </div> -->
  <!-- text  -->
  <!-- <div class="w-[40rem] p-12 flex flex-col justify-between">
        <div>
          <div class="w-[10rem] px-4 py-2 mb-8 rounded-4xl bg-white shadow-lg">📜 Hot Recipes</div>

          <h1 class="text-6xl font-semibold">Spicy delicious chicken wings</h1>
          <p class="py-8 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia voluptate illum,
            doloribus esse aliquid laborum error distinctio.
          </p>

          <div class="flex gap-3">
            <TimeCap class="w-33 h-10 flex justify-center rounded-4xl bg-gray-400/10" />
            <FoodCap txt="Chicken" class="w-33 h-10 flex justify-center rounded-4xl bg-gray-400/10" />
          </div>
        </div> -->

  <!-- profile-pic and button  -->
  <!-- <div class="flex items-center justify-between">
          <div class="flex gap-2">
            <img src="../assets/john.png" alt="profile-pic" />
            <div>
              <p class="font-semibold">John Smith</p>
              <span class="text-[14px] text-gray-500">15 March 2022</span>
            </div>
          </div>

          <div>
            <ButtonComp>
              <p>View Recipes</p>
              <img src="../assets/PlayCircle.png" alt="play-icon">
            </ButtonComp>
          </div>
        </div>
      </div> -->

  <!-- img  -->
  <!-- <picture>
        <img class="h-[40rem] w-[40rem]" src="../assets/Hero.png" alt="spicy-chicken" />
      </picture>
    </div>
  </div> -->
</template>
