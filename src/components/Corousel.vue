<script setup>
import { Navigation, Pagination, EffectFade, Keyboard, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/bundle';

const modules = [Navigation, Pagination, EffectFade, Keyboard, Autoplay]
</script>

<template>
    <swiper 
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            '--swiper-pagination-bullet-width': '20px',
            '--swiper-pagination-bullet-height': '20px',
            '--swiper-pagination-bullet-inactive-color': 'white',
            '--swiper-pagination-bullet-inactive-opacity': 0.5,
        }" 
        :grabCursor="true" 
        :slidesPerView="1" 
        :spaceBetween="30" 
        :loop="true" 
        :effect="'fade'"
        :pagination="{ dynamicBullets: true, clickable: true }" 
        :navigation="true" 
        :autoHeight="true" 
        :modules="modules"
        :keyboard="{
            enabled: true,
        }" 
        :centeredSlides="true" 
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
        }" 
        class="mySwiper max-h-[600px]">
        <swiper-slide class="relative">
            <img class="w-[100%]" src="../assets/ads/246865.jpg" alt="">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black "></div>
        </swiper-slide>
        <swiper-slide class="relative">
            <img class="w-[100%]" src="../assets/ads/5173738.jpg" alt="">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black "></div>
        </swiper-slide>
        <swiper-slide class="relative">
            <img class="w-[100%]" src="../assets/ads/online.jpg" alt="">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </swiper-slide>
        <swiper-slide class="relative">
            <img class="w-[100%]" src="https://news.codashop.com/bd/wp-content/uploads/sites/10/2020/10/Halloween-Image-Banner-Mobile-Legends.jpg" alt="">
            <div class="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        </swiper-slide>
    </swiper>
</template>