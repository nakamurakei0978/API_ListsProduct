<script setup>

const props = defineProps({
  class:String,
  title: String,
  total: Number,
})

</script>

<template>
    <div class="flex border-b border-slate-300/50 justify-between p-[20px_0] m-[10px_0]">
      <p>{{ title }}</p>
      <p v-if="total">{{total}} Total</p>
      <p v-else></p>
    </div>
</template>