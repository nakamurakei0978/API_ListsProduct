<script setup>
import PageTitle from '../components/PageTitle.vue';
import ProdCard from '../components/ProdCard.vue';
import { ref } from 'vue';
import SectionTitle from '../components/SectionTitle.vue';

const props = defineProps({ class: String })

const products = ref(null)
async function fetchData() {
  products.value = null
  const res = await fetch(
    `http://localhost:5000/products`
  )
  products.value = await res.json()
}
fetchData()

</script>

<template>
  <PageTitle title="Products" />

  <div>
    <div v-if="!products">
      <img src="../assets/loading.webp" alt="">
    </div>
    
    <SectionTitle title="Popular" :total="10" style="width: 100%;" />
    <div>
      <ProdCard v-for="product in products" 
        :name="product.product_name" 
        :price="product.product_price"
        :image="product.product_image" />
    </div>

  </div>
</template>

<style scoped>
</style>
