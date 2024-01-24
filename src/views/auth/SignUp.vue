<template>
  <auth-layout>
    <template v-slot:auth-card>
      <sign-up-form />
    </template>
  </auth-layout>
</template>

<script setup>
import SignUpForm from "../../components/forms/auth/SignUpForm.vue"
import AuthLayout from "./AuthLayout.vue"

</script>

<style scoped>

</style>