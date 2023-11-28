<script setup>

const props = defineProps({
  class:String,
  name: String,
  price: Object,
  image: Object | String,
})

</script>

<template>
  <div>
    <div>
      <img v-if="image" :src="image.url" alt="">
      <img v-else src="https://thebowlcut.com/cdn/shop/t/39/assets/loading.gif?v=157493769327766696621697232489">
    </div>
    <p>{{ name }}</p>
    <p>${{ price.formatted }}</p>
  </div>
</template>

<style scoped>

</style>
