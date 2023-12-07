<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import Cart from './components/Cart.vue'

const isToggleNav = ref(false)
function toggleNav() {
  isToggleNav.value = !isToggleNav.value
}

const isCartToggle=ref(false)
function cartToggle() {
  isCartToggle.value = !isCartToggle.value
}

</script>

<template>
  

  <nav
    class="backdrop-blur scroll-auto ps-3 pe-3 h-16 flex border-b border-slate-300/50 justify-between fixed top-0 w-full z-40">
    <div class="flex w-[250.91px]">
      <RouterLink to="/" class="p-5 text-[1.5]">Logo</RouterLink>
    </div>
    <div class="flex max-md:hidden">
      <RouterLink active-class="border-b-2" to="/" class="p-5 shadow-inner hover:border-b-2">Home</RouterLink>
      <RouterLink active-class="border-b-2" :to="{ name: 'product' }" class="p-5 hover:border-b-2">Product</RouterLink>
      <RouterLink active-class="border-b-2" to="/about" class="p-5 hover:border-b-2">About</RouterLink>
    </div>
    <div class="flex whitespace-nowrap max-md:hidden">
      <button class="p-5 hover:border-b-2" @click="cartToggle">Cart</button>
      <button class="p-5 hover:border-b-2" @click="">Sign in</button>
      <button class="p-5 hover:border-b-2" @click="">Sign up</button>
    </div>
    <!-- small screen -->
    <button :class="isToggleNav ? 'border-b-2' : ''" class="md:hidden p-5 hover:border-b-2" @click="toggleNav">
      Menu
      <Transition name="fade">
        <div class="h-[100dvh] overflow-y-scroll top-0 left-0 -z-10 absolute w-full bg-black/80" v-if="isToggleNav">
          <div class="h-16 bg-black/80 fixed w-full"></div>
          <div class="h-[100dvh] items-center pt-16 p-5 md:hidden flex flex-col">
            <RouterLink active-class="border-b-2" to="/"
              class="p-5 shadow-inner border-2 border-transparent hover:border-b-2 hover:border-b-white">Home</RouterLink>
            <RouterLink active-class="border-b-2" :to="{ name: 'product' }"
              class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white">Product</RouterLink>
            <RouterLink active-class="border-b-2" to="/about"
              class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white">About</RouterLink>
            <button class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white" @click="cartToggle">Cart</button>
            <button class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white" @click="">Sign
              in</button>
            <button class="p-5 border-2 border-transparent hover:border-b-2 hover:border-b-white" @click="">Sign
              up</button>
          </div>
        </div>
      </Transition>
    </button>
  </nav>
  <div class="container mx-auto px-4">
    <div class="mt-16 min-h-screen pb-20">
      <RouterView />
      <Transition name="cart">
        <Cart v-if="isCartToggle" @cart-toggle="(msg)=>isCartToggle=msg"/>
      </Transition>
    </div>
  </div>
  <footer class="h-52 -mt-16 border-t border-slate-300/50">
    ok
  </footer>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.cart-enter-active,
.cart-leave-active {
  transition: opacity 0.3s ease;
}

.cart-enter-from,
.cart-leave-to {
  opacity: 0;
}
</style>
