<script setup>
defineProps({
  txt: String
})
</script>

<template>
  <div class="">
    <div class="flex items-center gap-2 text-[14px]">
      <img src="../assets/ForkKnife.png" alt="ForkKnife-icon" />
      <p>{{txt}}</p>
    </div>
  </div>
</template>
