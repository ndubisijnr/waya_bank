<template>
    <auth-form-card>
      <template v-slot:card-title>
        <p class="text-center text-h5">Forgot Pin?</p>
      </template>
      <template v-slot:card-subtitle>
        <p class="text-center" style="margin: 30px 92px;color:#838787;font-size: 16px">
          Kindly enter the email or phone number you used to
          create this account
        </p>
      </template>
      <template v-slot:form-area>
        <div >
          <form class="login-form">
            <base-input :type="'text'" :placeholder="'Email Address'" />

            <base-button :title="'Reset Pin'"></base-button>
          </form>
        </div>
      </template>
      <template v-slot:footer-link>
        <div>
          <a href="/"> <p class="text-center link-black" style="margin-top: 30px;font-size: 16px">Back to Login</p></a>
        </div>
      </template>
    </auth-form-card>
</template>

<script setup>
import AuthFormCard from "../../cards/auth/AuthFormCard.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import BaseInput from "../../inputs/BaseInput.vue"

</script>

<style scoped>
a{
  text-decoration: none;
  color: #828282;
}

.link-black{
  color: #2D2B2A;
  cursor: pointer;
}
</style>