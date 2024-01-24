<template>
  <auth-layout>
    <template v-slot:auth-card>
      <reset-pin-form />
    </template>
  </auth-layout>
</template>

<script setup>
import AuthLayout from "./AuthLayout.vue"
import ResetPinForm from "../../components/forms/auth/ResetPinForm.vue"
</script>

<style scoped>

</style>