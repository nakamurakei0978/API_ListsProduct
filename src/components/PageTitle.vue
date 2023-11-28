<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  title: String
})


</script>

<template>
    <h1>{{ title || 'N/A' }}</h1>
</template>

<style scoped>

</style>