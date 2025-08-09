<script lang="ts" setup>
import ButtonComp from './ButtonComp.vue'
</script>

<template>
  <div class="w-full mx-auto flex flex-col xl:flex-row justify-center gap-15">
  <div class="flex items-center justify-center">
    <img class="lg:w-100" src="../assets/chef2.png" alt="">
  </div>
  <div>
    <h1 class="heading mb-18">Contact Us</h1>
  <form class="w-full lg:w-[52rem] flex flex-col justify-center " >
    <div class="w-full mx-auto lg:w-[52rem] flex flex-col md:flex-row justify-center gap-10">
      <div>
        <div class="flex flex-col gap-4 mt-5">
          <label for="name" class="text-gray-500 font-semibold text-sm">NAME</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name.."
            class="w-full h-15 lg:w-100 md:w-80 bg-white border-2 border-gray-300 rounded-2xl p-3 py-3 outline-none"
          />
        </div>

        <div class="flex flex-col gap-4 mt-5">
          <label for="email" class="text-gray-500 font-semibold text-sm">EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address.."
            class="w-full h-15 lg:w-100 md:w-80 bg-white border-2 border-gray-300 rounded-2xl p-3 py-3 outline-none"
          />
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-4 mt-5">
          <label for="Subject" class="text-gray-500 font-semibold text-sm">SUBJECT</label>
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject.."
            class="w-full h-15 lg:w-100 md:w-80 bg-white border-2 border-gray-300 rounded-2xl p-3 py-3 outline-none"
          />
        </div>

        <div class="flex flex-col gap-4 mt-5">
          <label for="enquiry" class="text-gray-500 font-semibold text-sm">ENQUIRY TYPE</label>
          <select
            name="enquiry"
            id="enquiry"
            class="w-full h-15 lg:w-100 md:w-80 bg-white border-2 border-gray-300 rounded-2xl p-3 py-3 outline-none"
          >
            <option value="advertisng">Advertising</option>
          </select>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div class="flex flex-col gap-4 mt-5">
        <label for="enquiry" class="text-gray-500 font-semibold text-sm">ENQUIRY TYPE</label>
        <textarea
          placeholder="Enter your message.."
          name=""
          id=""
          cols="88"
          rows="5"
          class="bg-white border-2 border-gray-300 rounded-2xl p-3 py-3"
        ></textarea>
      </div>
      <ButtonComp class="my-12">Submit</ButtonComp>
    </div>
  </form>
  </div>
</div>
</template>
