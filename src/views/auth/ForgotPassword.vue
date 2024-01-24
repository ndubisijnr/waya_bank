<script setup>
import AuthLayout from "./AuthLayout.vue"
import ForgotPasswordForm from "../../components/forms/auth/ForgotPasswordForm.vue"
</script>

<template>
  <auth-layout>
    <template v-slot:auth-card>
      <forgot-password-form />
    </template>
  </auth-layout>
</template>


<style scoped>

</style>