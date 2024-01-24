<!--
    This component handles both cooperate and personal signup process
     -->
<script setup>
import {reactive, onMounted, computed} from 'vue'
import SignUpForm from "../../forms/auth/SignUpForm.vue"
import LoginForm from "../../forms/auth/LoginForm.vue"
import router from "../../../router";
// import {defineProps} from "vue";
import {useAuthStore} from "../../../stores/auth";
const authStore = useAuthStore()
const props = defineProps( ['show'])


</script>

<template>
    <div class="auth-form-card-div">
      <v-card class="card">
        <div class="logo-wrapper">
          <img src="../../../assets/logos/logo1.png" class="logo" />
        </div>

        <!-- card title -->
        <slot name="card-title"></slot>
        <!-- end card title -->

        <!-- card sub-title -->
        <slot name="card-subtitle"></slot>
        <!-- end card sub-title -->

        <!-- form area -->
        <div class="form-area">
          <slot name="form-area"></slot>
        </div>
        <!-- end form area -->

        <!-- form footer-link -->
        <slot name="footer-link"></slot>
        <!-- form footer-link -->

        <div v-if="props.show" class="footer-links">
          <ul>
            <li>© Wayapay</li>
            <li>About</li>
            <li>Insights</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </v-card>
    </div>
  <img src="../../../assets/icons/MSGCHAT.svg" class="msg-chat" />

</template>

<style scoped>
.msg-chat{
  position: fixed;
  right: 30px;
  top: 90%;
  z-index: 3;
  cursor: pointer;
  transition: .5s linear;
}

.msg-chat:hover{
  transform: rotate(360deg);
  transition: .5s linear;
}

.account-create-p{
  font-size: 24px;
}
.logo{
  width: 120px;
  height: 50px;
}

.card{
  height:auto;
  padding-bottom: 30px;
}

.logo-wrapper{
  display: flex;
  /*border: solid crimson;*/
  width: 120px;
  height: 50px;
  margin: 30px auto;
}
.form-area{
  text-align: center;
}
.footer-links{
  width: 400px;
  height: 50px;
  text-align: center;
  margin: 76px auto 24px auto;
  padding: 10px;
}

.footer-links ul{
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 14px;
  /*margin: 90px auto;*/

}

.auth-form-card-div{
  width: 579px;
  height: auto;
  margin: 5px auto;
  border-top: solid #FF4400 9px;
  border-radius: 4px 4px 0px 0px;
  transform: scale(.9);
  background-color: #FFFFFF;
}

/* xs breakpoint */
@media (max-width: 800px) {
  .auth-form-card-div{
    width: 100%;
    margin: 5px auto;
    transform: scale(.95);
    /*border: solid;*/

  }
  .account-create-p{
    font-size: 14px;
  }
  .logo-wrapper{
    margin: 20px auto;
  }
  .account-option{
    width: 90%;
  }

  .not-active{
    font-size: 14px;

  }

  .active{
    font-size: 14px;

  }

  .footer-links{
    width: 100%;
    text-align: center;
    margin: 76px auto 24px auto;
  }


}
</style>