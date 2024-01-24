<script setup>
// import {defineProps} from "vue"

const props = defineProps(['title','loading', 'width', 'height','type'])
</script>

<template>
    <button class="base-btn" :style="{'width':props.width}"  :disabled="props.loading">{{props.title}}</button>
</template>

<style scoped>
.base-btn{
  width: 421px;
  height: 50px;
  background: #FF4400;
  border-radius: 4px;
  color: white;
}
.loading{}

@media (max-width: 999px) {
  .base-btn{
    width: 90%;
  }
}
</style>