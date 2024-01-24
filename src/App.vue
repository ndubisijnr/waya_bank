<script setup>
import DashboardLayout from "./views/dashboard/DashboardLayout.vue"
import AuthLayout from "./views/auth/AuthLayout.vue"
import {computed} from "vue";
import router from "./router";
const defaultLayout = 'default'


const layout = computed(() => {
  return router.currentRoute.value.meta.layout
})
</script>

<template>
      <dashboard-layout ></dashboard-layout>
      <router-view v-if="layout !== 'dashboard'"></router-view>
</template>

<style>
body{
  zoom: 95%;
}
/* transition */

.route-enter-from{
  opacity: 0;
  /*//transform: translateX(100px);*/
}
.route-enter-active{
  transition: all 0.2s ease-in;
}

.route-leave-to{
  opacity: 0;
  /*//transform: translateX(-100px);*/
}
.route-leave-active{
  transition: all 0.3s ease-out;
}
</style>
