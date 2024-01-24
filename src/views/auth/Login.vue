<template>
  <auth-layout>
  <template v-slot:auth-card>
    <login-form />
  </template>
  </auth-layout>
</template>

<script setup>
import LoginForm from "../../components/forms/auth/LoginForm.vue"
import AuthLayout from "./AuthLayout.vue"

</script>

<style scoped>

</style>