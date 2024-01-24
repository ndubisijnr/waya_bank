<template>
  <auth-layout>
    <template v-slot:auth-card>
      <invite-user-form />
    </template>
  </auth-layout>
</template>

<script setup>
import InviteUserForm from "../../components/forms/auth/InviteUserForm.vue"
import AuthLayout from "./AuthLayout.vue"

</script>

<style scoped>

</style>