<script setup>
import {ref} from 'vue'
const props = defineProps({
    placeholder:String,
    type:String,
    required: Boolean,
    className:String,
    id:String,
    label:String
})
const isEyeSlashed = ref(true)
const slashEye = () => {
  let input1 = document.getElementById('password')
  let input2 = document.getElementById('password2')
  isEyeSlashed.value = !isEyeSlashed.value
  if(!isEyeSlashed.value && input1.type === 'password') {
    input1.type = 'text'
  }else{
    input1.type = 'password'
  }
  if(!isEyeSlashed.value && input2.type === 'password'){
    input2.type = 'text'
  }else{
    input2.type = 'password'
  }

}

const checkPassword = (input) => {
  // Regular expression to match at least one uppercase, one lowercase, one digit, and one special character
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
  const checkers = document.querySelectorAll('.password-checker div')


  const passInput = document.getElementById('password')
  if(passInput.value.length === "8"){
    checkers.forEach((i) => {
      i.classList.add('strength2')
      i.classList.remove('strength2')
    })
  }else{
    checkers.forEach((i) => {
      i.classList.add('strength1')
      i.classList.remove('strength2')
    })
  }

  console.log(passInput.value.length)
  // Check if the input matches the regular expression
  return regex.test(input);
}

</script>

<template>
  <div class="base-input-div">
    <div class="fa-regular-div" v-if="props.type === 'password'">
      <i class="fa-regular fa-eye-slash" v-if="isEyeSlashed"   @click="slashEye"></i>
      <i class="fa-regular fa-eye"  v-else  @click="slashEye"></i>
    </div>
    <div>
      <p class="label">{{props.label}}</p>
      <input :id="props.id" @input="props.id === 'password' ? checkPassword() : null" :type="props.type" :placeholder="props.placeholder" :class="props.className ? props.className : 'base-input'" :required="props.required">
    </div>
    <div v-if="props.id === 'password2'">
      <div class="password-checker">
        <div class="strength1 1"></div>
        <div class="strength1 2"></div>
        <div class="strength1 3"></div>
        <div class="strength1 4"></div>
        <div class="strength1 5"></div>
      </div>
      <div class="info">
        <img src="../../assets/icons/warn.png" width="13" height="12"/>
        <p class="info-p">Password must contain at least 8 characters, an uppercase letter,
          a lowercase letter, a number and a special character.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.password-checker{
  display: flex;
  gap: 10px;
  margin-top: 14px;
}
.strength1{
  width: 80px;
  height: 4px;
  background: #E0E0E0;
  border-radius: 3px;
}
.strength2{
  width: 80px;
  height: 4px;
  background: #FF4400;
  /*background: #E0E0E0;*/
  border-radius: 3px;
  transition: .5s linear;
}

.info{
  display: flex;
  margin-top: 15px;
}

.info-p{
  font-size: 12px;
  color: #FF4400;
}

.label{
  width: 100%;
  text-align: start;
  color: #828282;
}
.base-input-div{
  margin:20px auto;
  width: 421px;
  position: relative;
}
.base-input{
  width: 100%;
  outline: none;
  height: 37px;
  border: 1px solid #828282;
  border-radius: 4px;
  padding: 10px;
}

.fa-regular-div{
  position: absolute;
  right: 10px;
  top: 35px;
}

.fa-regular{
  cursor: pointer;
  font-size: 20px;
}

@media (max-width: 999px) {
  .base-input-div{
    margin:30px auto;
    width: 90%;
    position: relative;
  }
}

</style>