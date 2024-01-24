<template>
  <auth-layout>
    <template v-slot:auth-card>
      <verify-form />
    </template>
  </auth-layout>
</template>

<script setup>
import VerifyForm from "../../components/forms/auth/VerifyForm.vue"
import AuthLayout from "./AuthLayout.vue"


</script>

<style scoped>

</style>