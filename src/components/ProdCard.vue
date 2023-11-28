<script setup>
import { ref } from 'vue';

const props = defineProps({
  class:String,
  name: String,
  price: Object,
  image: Object | String,
})

const isHover=ref(false)


</script>

<template>
  <div class="h-[400px] w-full relative">
    <div  @mouseenter="isHover=true" @mouseleave="isHover=false" :class="`grid place-items-center ${isHover ? 'opacity-100':'opacity-0'} transition duration-300 absolute w-full h-full bg-white/40 backdrop-blur-sm`">
      <div class="flex flex-col gap-3">
        <button class="p-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-105 transition duration-300">Details</button>
        <button class="p-3 bg-gradient-to-br from-purple-600 to-blue-500 hover:scale-105 transition duration-300">Add to Cart</button>
      </div>
    </div>
    <div class="grid place-items-center">
      <img class="object-contain h-[350px] " v-if="image" :src="image.url" alt="">
      <img class="object-contain h-[350px] " v-else src="https://thebowlcut.com/cdn/shop/t/39/assets/loading.gif?v=157493769327766696621697232489">
    </div>
    <p>{{ name }}</p>
    <p>${{ price.formatted }}</p>
  </div>
</template>

<style scoped>

</style>
