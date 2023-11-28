<script setup>
import PageTitle from '../components/PageTitle.vue';
import { ref, inject } from 'vue';
import ProdCard from '../components/ProdCard.vue';
import SectionTitle from '../components/SectionTitle.vue';
import Corousel from '../components/Corousel.vue';
import Card from 'primevue/card';
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { EMPTY_ARR } from '@vue/shared';
dayjs.extend(isSameOrBefore)

const commerce = inject('commerce');

const modules = [Grid, Pagination]
console.log();

const props = defineProps({ class: String })

const catLength = ref(0)
const categories = ref([])
const isCatReady = ref(null)
async function fetchCategory() {
  isCatReady.value = null
  // use await to get the value of the promise
  const res = await commerce.categories.list();
  console.log(res.data);
  categories.value = res.data
  catLength.value = categories.value.length
  isCatReady.value = true
}
fetchCategory()



const prodLength = ref(0)
const products = ref([])
const isProdReady = ref(null)
async function fetchProducts() {
  isProdReady.value = null
  // use await to get the value of the promise
  const res = await commerce.products.list();
  console.log(res.data);
  products.value = res.data
  prodLength.value = products.value.length
  isProdReady.value = true
}
fetchProducts()

function newArrival(products) {
  let newProduct = []
  products.forEach((element, index) => {
    if (index === 21) { this.break }
    else {
      const currentDate = dayjs()
      const dateCreate = element.created
      const isLessThanOneDay = dayjs(dateCreate).isSameOrBefore(currentDate.subtract(30, 'day'))
      if (isLessThanOneDay) {
        newProduct[index] = element
      }
    }
  });
  return newProduct
}
</script>

<template >
  <!-- <PageTitle title="Welcome to Homepage" /> -->

  <Corousel />

  <SectionTitle title="Category" :total="catLength" />
  <div>
    <div v-if="!isCatReady"
      class="grid overflow-hidden gap-5 animate-pulse sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <div v-for="i in 5" class="w-full bg-slate-400/25 gap-5 h-[250px] p-2 ">
        <div class="bg-white/25 h-[210px] w-full inline-block"></div>
        <p class="bg-white/25 h-4 inline-block w-28"></p>
      </div>
    </div>

    <swiper :style="{
      '--swiper-pagination-color': 'Black',
    }" :breakpoints="{
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 20
  }
}" :slidesPerView="6" :grid="{
  rows: 1,
}" :pagination="{
  type: 'progressbar',
}" :spaceBetween="30" :modules="modules" class="mySwiper">
      <swiper-slide class="cursor-pointer " v-for="category in categories">
        <img :src="category.assets[0].url" alt="">
        <p>{{ category.name }}</p>
      </swiper-slide>
    </swiper>
  </div>

  <SectionTitle title="New Arrivals" :total="prodLength" />
  <div>
    <!-- skelly -->
    <div v-if="!isProdReady"
      class="w-full grid overflow-hidden gap-5 animate-pulse sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="i in 8" class="w-full bg-slate-400/25 gap-5 h-[310px] p-2 ">
        <div class="bg-white/25 h-[250px] w-full inline-block"></div>
        <p class="bg-white/25 h-4 inline-block w-40"></p>
        <p class="bg-white/25 h-4 block w-28"></p>
      </div>
    </div>
    <div class="grid gap-y-5 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProdCard v-for="product in newArrival(products)" :name="product.name" :price="product.price"
        :image="product.image" />
    </div>
  </div>
  <!-- <div>
      <SectionTitle title="Recently Updated" :total="prodLength" />
      <div class="grid grid-cols-5 gap-4">
        <ProdCard v-for="product in products" :name="product.name" :price="product.price" :image="product.image" />
      </div>
    </div> -->
</template>

<style scoped></style>