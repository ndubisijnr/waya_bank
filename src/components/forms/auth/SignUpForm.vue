<template>
  <div>
    <auth-form-card :show="true">
      <template v-slot:card-title>
        <p class="text-center text-h5" v-show="!authStore.getShowLoginForm">WayaBank Account Creation</p>
      </template>
      <template v-slot:card-subtitle>
        <p class="text-center" style="margin-top: 30px;color:#838787;font-size: 16px">Kindly select your Account Type</p>
      </template>
      <template v-slot:form-area>
        <div v-if="authStore.caFormStage === 'first' && authStore.paFormStage === 'first'">
          <div class="account-option">
            <div class="cooperate not-active" :class="{'active':!data.isPersonal}" @click="isCooperate">Cooperate Account</div>
            <div class="personal not-active" :class="{'active':data.isPersonal}" @click="isPersonal">Personal Account </div>
          </div>
        </div>
        <div v-if="authStore.getFormType === 'CA'">
          <form @submit.prevent="authStore.handleNext('ca')" v-if="authStore.caFormStage === 'first'">
            <base-input
                :type="'text'"
                :placeholder="'Organisation Name'"
                :required="false"
            />

            <div class="base-input-div">
              <select class="input-select">
                <option>Account Type</option>
              </select>
            </div>

            <base-input
                :type="'email'"
                :placeholder="'Organisation Email Address'"
            />

            <base-input
                :type="'tel'"
                :placeholder="'Organisation Phone Number'"
            />

            <base-button :title="'Next'"/>

          </form>
          <form @submit.prevent="authStore.handleNext('ca-form-2')" v-if="authStore.caFormStage === 'second'">
              <base-input
                  :type="'text'"
                  :placeholder="'First name'"
              />

              <base-input
                  :type="'text'"
                  :placeholder="'Last Name'"
              />

              <base-input
                  :type="'email'"
                  :placeholder="'Personal Email Address'"
              />

            <base-input
                  :type="'tel'"
                  :placeholder="'Personal Phone Number'"
              />
            <base-input
                  :type="'tel'"
                  :placeholder="'Personal Phone Number'"
              />
            <div class="base-input-div">
              <select class="input-select">
                <option>Select Gender</option>
              </select>
            </div>
            <base-input
                :type="'date'"
                :placeholder="'Date of Birth'"
            />

            <base-input
                :type="'text'"
                :placeholder="'office address'"
            />
            <div class="base-input-div">
              <select class="input-select">
                <option>State</option>
              </select>
            </div>
            <div class="base-input-div">
              <select class="input-select">
                <option>City</option>
              </select>
            </div>


            <div class="checkbox">
                <div class="checkbox-div">
                  <input type="checkbox" class="checkbox-box" />
                </div>
                <p class="checkbox-p">Creating an account means you’re okay with our <a href="">Terms of Service, Privacy Policy.</a></p>
              </div>

            <base-button :title="'Next'"/>
          </form>
          <form @submit.prevent="" v-if="authStore.caFormStage === 'third'">
              <base-input
                  :type="'text'"
                  :placeholder="'Referral Code'"
              />

              <base-input
                  :type="'password'"
                  :placeholder="'Password'"
                  :id="'password'"
              />

              <base-input
                  :type="'password'"
                  :placeholder="'Confirm Password'"
                  :id="'password2'"
              />

              <div class="checkbox">
                <div class="checkbox-div">
                  <input type="checkbox" class="checkbox-box" />
                </div>
                <p class="checkbox-p">Creating an account means you’re okay with our <a href="">Terms of Service, Privacy Policy.</a></p>
              </div>

              <base-button :title="'Create Account'" @click="verify"/>
            </form>
        </div>
        <div v-if="authStore.getFormType === 'PA'">
          <form @submit.prevent="authStore.handleNext('pa')" v-if="authStore.paFormStage === 'first'">
            <base-input
                :type="'text'"
                :placeholder="'First Name'"
                :required="true"
            />
            <base-input
                :type="'text'"
                :placeholder="'Last Name'"
                :required="true"
            />

            <base-input
                :type="'email'"
                :placeholder="'Email'"
            />

            <base-input
                :type="'tel'"
                :placeholder="'Phone number'"
            />
            <base-input
                :type="'tel'"
                :placeholder="'Referal Code'"
            />

            <base-button :title="'Next'"/>

          </form>
          <form @submit.prevent="" v-if="authStore.paFormStage === 'second'">

              <base-input
                  :type="'password'"
                  :placeholder="'Password'"
                  :id="'password'"
              />

              <base-input
                  :type="'password'"
                  :placeholder="'Confirm Password'"
                  :id="'password2'"
              />

              <div class="checkbox">
                <div class="checkbox-div">
                  <input type="checkbox" class="checkbox-box" />
                </div>
                <p class="checkbox-p">Creating an account means you’re okay with our <a href="">Terms of Service, Privacy Policy.</a></p>
              </div>

              <base-button :title="'Create Account'" @click="verify"/>
            </form>
        </div>
      </template>
      <template v-slot:footer-link>
       <a href="/"> <p class="text-center" style="margin-top: 30px;color:#838787;font-size: 16px">Have an account? <span class="login-link link-peal">Login</span></p></a>
      </template>
    </auth-form-card>
  </div>
</template>

<script setup>
import AuthFormCard from "../../cards/auth/AuthFormCard.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import BaseInput from "../../inputs/BaseInput.vue"
// import {computed, onMounted, defineComponent} from "vue";
import LoginForm from './LoginForm.vue'
import {useAuthStore} from "../../../stores/auth";
import {reactive} from "vue";
import router from "../../../router";
const authStore = useAuthStore()

const data = reactive({
  isPersonal:false
})

const isPersonal = () => {
  data.isPersonal = true
  authStore.handleFormType('PA')

}

const isCooperate = () => {
  data.isPersonal = false
  authStore.handleFormType('CA')
}

const verify = () => {
  router.push({name:'verify_account'})
}

</script>

<style scoped>
a {
  text-decoration: none;
}

.base-input-div{
  margin:30px auto;
  width: 421px;
  position: relative;
}
.checkbox{
  display: flex;
  margin: 10px auto 40px auto;
  width: 421px;
  gap: 12px;

}
.checkbox-box-div{
  width: auto;
}

.input-select{
  width: 100%;
  outline: none;
  border-bottom:solid;
  padding-bottom: 5px;
}

.input-select:focus{
  outline: none;
  border-bottom:solid #FF4400;
}

.link-peal{
  color: #0892A5;
}

.login-link{
  cursor: pointer;
}

.checkbox-p{
  color: #838787;
  font-size: 14px;
  text-align: start;
  width: 100%;
}
.account-option{
  width: 421px;
  height: 61px;
  background: #F4F4F4;
  border-radius: 4px;
  margin: 22px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.not-active{
  color: #838787;
  background: transparent;
  cursor: pointer;
  transition: .1s linear;
  padding: 12px;
  text-align: center;

}
.active{
  color: #1C1C1C;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  padding: 12px;
  font-size: 16px;
  width: 180px;
  cursor: not-allowed;
  transition: .1s linear;
  text-align: center;

}

/* xs breakpoint */
@media (max-width: 800px) {

  .account-option{
    width: 90%;
  }

  .not-active{
    font-size: 14px;

  }

  .active{
    font-size: 14px;

  }


}
</style>