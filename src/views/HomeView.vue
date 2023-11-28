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
dayjs.extend(isSameOrBefore)

const commerce = inject('commerce');

const modules = [Grid, Pagination]
console.log();

const props = defineProps({ class: String })

const catLength = ref(0)
const categories = ref([])
async function fetchCategory() {
  // use await to get the value of the promise
  const res = await commerce.categories.list();
  console.log(res.data);
  categories.value = res.data
  catLength.value = categories.value.length
}
fetchCategory()

const prodLength = ref(0)
const products = ref([])
async function fetchProducts() {
  // use await to get the value of the promise
  const res = await commerce.products.list();
  console.log(res.data);
  products.value = res.data
  prodLength.value = products.value.length
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

  <div>
    <SectionTitle title="Category" :total="catLength" />

    <swiper :style="{
      '--swiper-pagination-color': 'Black',
    }" :breakpoints="{
  0: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  576: {
    slidesPerView: 2,
    spaceBetween: 10
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10
  },
  992: {
    slidesPerView: 4,
    spaceBetween: 20
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 20
  },
  1400: {
    slidesPerView: 6,
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

  <div>
    <SectionTitle title="New Arrivals" :total="prodLength" />
    <div>
      <ProdCard v-for="product in newArrival(products)" :name="product.name" :price="product.price"
        :image="product.image" />
    </div>
  </div>
  <div>
    <SectionTitle title="Recently Updated" :total="prodLength" />
    <div class="grid grid-cols-5 gap-4">
      <ProdCard v-for="product in products" :name="product.name" :price="product.price" :image="product.image" />
    </div>
  </div>
</template>
