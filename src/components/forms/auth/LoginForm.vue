<template>
  <Modal1 :isBlur="false">
    <template v-slot:modal1-content>
      <div>
        <auth-form-card :show="true">
          <template v-slot:card-title>
            <p class="text-center text-h5">Welcome Back</p>
          </template>
          <template v-slot:form-area>
            <div >
<!--              <router-link to="/create-account"><i class="fa-solid fa-x"></i></router-link>-->
              <form class="login-form" @submit.prevent="toDashboard">
                <base-input :type="'text'" :placeholder="'Email or Phone number'" />
                <base-input :id="'password'" :type="'password'" :placeholder="'Password'" />

                <base-button :title="'Log in'"></base-button>
              </form>
            </div>
          </template>
          <template v-slot:footer-link>
            <div>
              <a href="/create-account"><p class="text-center" style="margin-top: 30px;color:#838787;font-size: 16px">Don't have an account? <span class="link-orange">Sign up instead</span></p></a>
              <a href="/forgot-password"> <p class="text-center link-orange" style="margin-top: 30px;font-size: 16px">Forgot your password?</p></a>
            </div>
          </template>
        </auth-form-card>
      </div>
    </template>
  </Modal1>
</template>

<script setup>
import AuthFormCard from "../../cards/auth/AuthFormCard.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import BaseInput from "../../inputs/BaseInput.vue"
import Modal1 from "../../modal/Modal1.vue";
import {useAuthStore} from "../../../stores/auth";
import router from "../../../router";
const authStore = useAuthStore()

const toDashboard = () => {
  router.push({path:'/dashboard'})
}


</script>

<style scoped>
.fa-x{
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}
.link-orange{
  color: #FF4400;
  cursor: pointer;
}

a{
  text-decoration: none;
}

</style>