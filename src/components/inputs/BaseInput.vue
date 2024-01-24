<script setup>
import {ref} from 'vue'
const props = defineProps({
    placeholder:String,
    type:String,
    required: Boolean,
    className:String,
    id:String,
    disabled:Boolean,
    detail:String
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
</script>

<template>
  <div class="base-input-div">
    <div class="fa-regular-div" v-if="props.type === 'password'">
      <i class="fa-regular fa-eye-slash" v-if="isEyeSlashed"   @click="slashEye"></i>
      <i class="fa-regular fa-eye"  v-else  @click="slashEye"></i>
    </div>
    <input :disabled="props.disabled" :id="props.id" :type="props.type" :placeholder="props.placeholder" :class="props.className ? props.className : 'base-input'" :required="props.required">
    <p class="details" v-if="props.detail">{{props.detail}}</p>
  </div>
</template>

<style scoped>
.details{
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 6px;

  color: #828282;
}
.base-input-div{
  margin:30px auto;
  width: 421px;
  position: relative;
}
.base-input{
  width: 100%;
  outline: none;
  border-bottom:solid;
  padding-bottom: 5px;
}
.base-input:focus{
  outline: none;
  border-bottom:solid #FF4400;
}

.fa-regular-div{
  position: absolute;
  right: 10px;
  top: 3px;
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