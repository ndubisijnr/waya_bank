<script setup>
import VerificationFormCard from "../../cards/auth/VerificationFormCard.vue"
import BaseInput from "../../inputs/BaseInput.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import router from "../../../router";
import {onMounted, ref, computed} from "vue";
const success = ref(false)

const get = computed(() => {return success.value})
// function tab(){
//   const inputs = document.querySelectorAll('.otp-div input')
//   inputs.forEach((input, index) => {
//     input.dataset.index = index
//     input.addEventListener('keyup', handleOtp)
//   })
//   function handleOtp(e) {
//     const input = e.target
//     let value = input.value
//     // input.value = ""
//     input.value = value ? value[0] : ""
//
//     let fieldIndex = input.dataset.index;
//     if(value.length > 0 && fieldIndex < inputs.length - 1){
//       input.nextElementSibling.focus()
//     }
//     if(e.key === "Backspace" && fieldIndex > 0){
//       input.previousElementSibling.focus()
//     }
//   }
//   const submit = () => {
//     let otp = "";
//     inputs.forEach((input) => {
//       otp +=input.value
//     })
//     console.log(otp)
//   }
//
// }

function tab() {
  const inputs = document.querySelectorAll('.otp-div input');
  inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener('input', handleOtp);
    input.addEventListener('keydown', handleKeyDown);
  });

  // function handleOtp(e) {
  //   const input = e.target;
  //   let value = input.value;
  //   input.value = value ? value[0] : "";
  //   let fieldIndex = parseInt(input.dataset.index);
  //   if (value.length > 0 && fieldIndex < inputs.length - 1) {
  //     inputs[fieldIndex + 1].focus();
  //   }
  // }

  function handleOtp(e) {
    const input = e.target;
    let value = input.value;
    let fieldIndex = parseInt(input.dataset.index);
    if (fieldIndex === inputs.length - 1 && value !== "") {
      inputs[fieldIndex].value = "";
      return;
    }
    input.value = value ? value[0] : "";
    if (value.length > 0 && fieldIndex < inputs.length - 1) {
      inputs[fieldIndex + 1].focus();
    }
  }


  function handleKeyDown(e) {
    const input = e.target;
    let fieldIndex = parseInt(input.dataset.index);
    if (e.key === "Backspace" && fieldIndex > 0) {
      inputs[fieldIndex - 1].focus();
      // e.preventDefault();
    }
  }

  const submit = () => {
    let otp = "";
    inputs.forEach((input) => {
      otp += input.value;
    });
    console.log(otp);
  };
}

// function tab() {
//   const inputs = document.querySelectorAll('.otp-div input');
//   inputs.forEach((input, index) => {
//     input.dataset.index = index;
//     input.addEventListener('input', handleOtp);
//   });
//
//   function handleOtp(e) {
//     const input = e.target;
//     let value = input.value;
//     let fieldIndex = parseInt(input.dataset.index);
//     input.value = value ? value[0] : "";
//
//     if (value === "" && fieldIndex > 0) {
//       inputs[fieldIndex - 1].value = "";
//       inputs[fieldIndex - 1].focus();
//     } else if (fieldIndex < inputs.length - 1 && value.length > 0) {
//       inputs[fieldIndex + 1].focus();
//     }
//   }
//
//   const submit = () => {
//     let otp = "";
//     inputs.forEach((input) => {
//       otp += input.value;
//     });
//     console.log(otp);
//   };
// }


const showSuccess = () => {
  success.value = true
}
const pushToLogin = () => {
   router.push({name:'Login'})
}

onMounted(() => {
  tab()
})

</script>

<template>
  <verification-form-card v-if="!get">

      <template v-slot:card-title>
        <p class="text-center text-h5">Verify Your Account</p>
      </template>
      <template v-slot:card-subtitle>
        <p class="text-center" style="margin: 30px 92px;color:#838787;font-size: 16px">
          Please Input the OTP sent to your
          mobile number.
        </p>
      </template>
      <template v-slot:form-area>
        <form @submit.prevent="showSuccess()" class="form">
          <div class="otp-div">
            <input type="number" class="otp" />
            <input type="number" class="otp" />
            <input type="number" class="otp" />
            <input type="number" class="otp" />
            <input type="number" class="otp" />
            <input type="number" class="otp" />

          </div>
          <base-button :title="'Verify'" :width="'315px'"/>
        </form>
      </template>
      <template v-slot:footer-link>
        <p class="text-center link-orange" style="font-size: 16px">Did not get OTP?</p>
      </template>

  </verification-form-card>
  <verification-form-card v-else>
    <template v-slot:card-title>
      <img src="../../../assets/icons/success.svg" />
      <h5 class="success">Success</h5>
    </template>
    <template v-slot:card-subtitle>
      <p class="text-center" style="margin: 30px 92px;color:#838787;font-size: 16px">
        Welcome to WayaBank, continue to enjoy the secured new age Banking
      </p>
    </template>
    <template v-slot:form-area>
      <router-link to="/"><base-button :title="'Continue'" :width="'315px'" /></router-link>
    </template>
  </verification-form-card>
</template>


<style scoped>
.form{
  width: 315px;
  margin:22px auto;
}
.otp-div{
  display: flex;
  margin:30px auto;
}

.link-orange{
  color: #FF4400;
  cursor: pointer;
}

.success{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #39B67B;

}

.otp{
  width: 100%;
  outline: none;
  border-bottom:solid;
  margin:auto 5px;
  padding-left: 15px;
}

.otp:focus{
  outline: none;
  border-bottom:solid #FF4400;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>