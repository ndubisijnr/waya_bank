<template>
  <auth-form-card>
    <template v-slot:card-title>
      <p class="text-center text-h5">CREATE ACCOUNT</p>
    </template>
    <template v-slot:form-area>
      <div class="invite-user-form">
        <form>
          <base-input-2 :type="'text'" :label="'Email'" />
          <base-input-2 :type="'text'" :label="'Phone Number'" />
          <base-input-2 :type="'text'" :label="'First Name'" />
          <base-input-2 :type="'text'" :label="'Last Name'" />
          <base-input-2 :id="'password'" :type="'password'"  :label="'Create Password'"/>
          <base-input-2 :id="'password2'" :type="'password'"  :label="'Confirm Password'"/>
          <base-button :title="'Create Account'"></base-button>
        </form>
      </div>
    </template>
  </auth-form-card>
</template>

<script setup>
import AuthFormCard from "../../cards/auth/AuthFormCard.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import BaseInput2 from "../../inputs/BaseInput2.vue"
import {useAuthStore} from "../../../stores/auth";
const authStore = useAuthStore()
</script>

<style scoped>
.invite-user-form{
  /*margin-bottom: 60px;*/
}
</style>