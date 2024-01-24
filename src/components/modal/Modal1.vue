<template>
    <div class="modal1" :style="props.isBlur ? {backdropFilter:'blur(2px)'} : null">
      <slot name="modal1-content"/>
    </div>
</template>

<script setup>
const props = defineProps({
  isBlur:Boolean
})
</script>

<style scoped>
.modal1{
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  overflow-y: scroll;
}

::-webkit-scrollbar{
  display: none;
}
</style>