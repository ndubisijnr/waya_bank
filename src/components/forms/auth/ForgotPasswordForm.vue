<script setup>
import AuthFormCard from "../../cards/auth/AuthFormCard.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import BaseInput from "../../inputs/BaseInput.vue"
import {useAuthStore} from "../../../stores/auth";
import router from "../../../router";
const authStore = useAuthStore()

const verify = () => {
  router.push({name:'verify_account'})
}
</script>

<template>
    <auth-form-card>
      <template v-slot:card-title>
        <p v-if="authStore.fpFormStage === 'second'" class="text-center text-h5">Forgot Password?</p>
        <p  v-else class="text-center text-h5">Reset Password</p>
      </template>
      <template v-slot:card-subtitle>
        <p v-if="authStore.fpFormStage === 'second'" class="text-center" style="margin: 30px 92px;color:#838787;font-size: 16px">
          Kindly enter the email or phone number you used to create this account
        </p>
        <p v-else  class="text-center" style="margin: 30px 92px;color:#838787;font-size: 16px">Fill in your new password</p>
      </template>
      <template v-slot:form-area>
        <div >
          <div class="login-form">
            <div v-if="authStore.fpFormStage === 'second'">
              <base-input :type="'text'" :placeholder="'Email or Phone number'" />
              <base-button :title="'Reset Password'" @click="verify"></base-button>
            </div>
            <div v-else>
              <base-input :id="'password'" :type="'password'" :placeholder="'Password'" />
              <base-input :id="'password2'" :type="'password'" :placeholder="'Confirm Password'" />
              <base-button :title="'Reset Password'"></base-button>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer-link>
        <div>
          <a href="/"> <p class="text-center link-black" style="margin-top: 30px;font-size: 16px">Back to Login</p></a>
        </div>
        <div>
          <a href="/create-account"> <p class="text-center link-orange" style="margin-top: 30px;font-size: 16px">Don't have an account?  <span class="link-black">Sign up instead</span></p></a>
        </div>
      </template>
    </auth-form-card>
</template>


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