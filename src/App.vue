<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Cart from './components/Cart.vue'

const isActive = ref(false)
function toggleCart() {
  isActive.value = !isActive.value
}


</script>

<template>
  <nav
    class="backdrop-blur scroll-auto ps-3 pe-3 h-16 flex border-b border-slate-300/50 justify-between fixed top-0 w-full z-50">
    <RouterLink to="/" class="p-5">Logo</RouterLink>
    <div class="flex">
      <RouterLink active-class="border-b-2" to="/" class="p-5 shadow-inner hover:border-b-2">Home</RouterLink>
      <RouterLink active-class="border-b-2" :to="{ name: 'product' }" class="p-5 hover:border-b-2">Product</RouterLink>
      <RouterLink active-class="border-b-2" to="/about" class="p-5 hover:border-b-2">About</RouterLink>
    </div>
    <button class="p-5 hover:border-b-2" @click="toggleCart">Cart</button>
  </nav>
  <div class="container mx-auto px-4">
    <div class="mt-16 min-h-screen pb-20">
      <RouterView/>
    </div>
    <!-- <Cart /> -->
  </div>
  <footer class="h-52 -mt-16 border-t border-slate-300/50">
    ok
  </footer>
</template>
<style scoped></style>
