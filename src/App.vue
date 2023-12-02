<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Cart from './components/Cart.vue'

const isToggleNav = ref(false)
function toggleNav(){
  isToggleNav.value=!isToggleNav.value
}


</script>

<template>
  <nav
    class="backdrop-blur scroll-auto ps-3 pe-3 h-16 flex border-b border-slate-300/50 justify-between fixed top-0 w-full z-50">
    <div class="flex w-[250.91px]">
      <RouterLink to="/" class="p-5 text-[1.5]">Logo</RouterLink>
    </div>
    <div class="flex max-md:hidden">
      <RouterLink active-class="border-b-2" to="/" class="p-5 shadow-inner hover:border-b-2">Home</RouterLink>
      <RouterLink active-class="border-b-2" :to="{ name: 'product' }" class="p-5 hover:border-b-2">Product</RouterLink>
      <RouterLink active-class="border-b-2" to="/about" class="p-5 hover:border-b-2">About</RouterLink>
    </div>
    <div class="flex whitespace-nowrap max-md:hidden">
      <button class="p-5 hover:border-b-2" @click="">Cart</button>
      <button class="p-5 hover:border-b-2" @click="">Sign in</button>
      <button class="p-5 hover:border-b-2" @click="">Sign up</button>
    </div>
    <!-- small screen -->
    <button :class="isToggleNav?'border-b-2':''" class="md:hidden p-5 hover:border-b-2" @click="toggleNav">
      Menu
      <Transition>
        <div class="h-[100dvh] overflow-y-scroll top-0 left-0 -z-10 absolute w-full bg-black/80" v-if="isToggleNav">
          <div class="h-16 bg-black/80 fixed w-full"></div>
          <div class="h-[100dvh] items-center pt-16 p-5 md:hidden flex flex-col">
            <RouterLink active-class="border-b-2" to="/" class="p-5 shadow-inner border-2 border-transparent hover:border-b-2 hover:border-b-white">Home</RouterLink>
            <RouterLink active-class="border-b-2" :to="{ name: 'product' }" class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white">Product</RouterLink>
            <RouterLink active-class="border-b-2" to="/about" class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white">About</RouterLink>
            <button class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white" @click="">Cart</button>
            <button class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white" @click="">Sign in</button>
            <button class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white" @click="">Sign up</button>
          </div>
        </div>
      </Transition>
    </button>
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
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
