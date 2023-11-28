<script setup>
import PageTitle from '../components/PageTitle.vue';
import ProdCard from '../components/ProdCard.vue';
import { ref, inject } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';

const commerce = inject('commerce');
const props = defineProps({ class: String })

const isProdReady = ref(null)
const prodLength = ref(0)
const products = ref([])
async function fetchProducts() {
  isProdReady.value=null
  // use await to get the value of the promise
  const res = await commerce.products.list();
  console.log(res.data);
  products.value = res.data
  prodLength.value = products.value.length
  isProdReady.value=true
}
fetchProducts()

</script>

<template>
  <PageTitle class="pt-5 text-3xl text-center" title="Products" />
  <SectionTitle title="Products" :total="prodLength" />
  <div>
    <div v-if="!isProdReady"
      class="w-full grid overflow-hidden gap-5 animate-pulse sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="i in 8" class="w-full bg-slate-400/25 gap-5 h-[400px] p-2 ">
        <div class="bg-white/25 h-[340px] w-full inline-block"></div>
        <p class="bg-white/25 h-4 inline-block w-40"></p>
        <p class="bg-white/25 h-4 block w-28"></p>
      </div>
    </div>

    <div class="grid gap-y-5 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProdCard v-for="product in products" :name="product.name" :price="product.price"
        :image="product.image" />
    </div>
  </div>
</template>

<style scoped></style>
