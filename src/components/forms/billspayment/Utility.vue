<template>
  <div>
    <div v-if="!data.showNext" class="form-1">
      <div class="base-input-div">
        <div class="input-select">
          <div class="dropdown">
            <p>Choose a Company</p>
            <img @click="toggleShow" src="../../billspayment/assets/icons/icon_down.svg" style="cursor:pointer;position:absolute;right: 10px;top: 10px" />
            <div class="dropdown-child" v-if="data.show">
              <div class="dropdown-child-div">
                <img src="../../billspayment/assets/icons/MTNLogo1.png" />
                <p>MTN</p>
              </div>
              <div class="dropdown-child-div">
                <img src="../../billspayment/assets/icons/AirtelNigeriaLogo1.png" />
                <p>Airtel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <base-input :type="'text'"  :placeholder="'Meter Number'"/>

      <base-input :type="'text'"  :placeholder="'Amount'" />
      <base-button :title="'Next'" @click="toNext"></base-button>
    </div>
    <form v-else>
      <div class="form-2">
        <div class="form-2-inner">
          <h5 class="form-2-inner-h">Input your 4 digit pin</h5>
          <p class="form-2-inner-p">Please input your 4digit pin to pay bills</p>
          <div class="form-2-inner-div">
            <div class="form-2-inner-div-child">
              <p>Receipient</p>
              <p>09038238722</p>
            </div>
            <div class="form-2-inner-div-child">
              <p>Amount</p>
              <p>40,000</p>
            </div>
            <div class="form-2-inner-div-child">
              <p>Beneficiary Bank: </p>
              <p>MTN Nigeria</p>
            </div>
            <div class="form-2-inner-div-child">
              <p>From</p>
              <p>0190974311</p>
            </div>
            <div class="form-2-inner-div-child">
              <p>Transaction fee:</p>
              <p>N10,000</p>
            </div>
          </div>
          <div class="otp-div">
            <input type="number" class="otp" />
            <input type="number" class="otp" />
            <input type="number" class="otp" />
            <input type="number" class="otp" />
          </div>
        </div>
      </div>
      <base-button :title="'Confirm'"></base-button>
    </form>
  </div>
</template>

<script setup>
import BaseInput from "../../inputs/BaseInput.vue"
import BaseButton from "../../buttons/BaseButton.vue"
import {onMounted, reactive} from "vue";
import tab from "../../../mixins"

const data = reactive({
  show:false,
  showNext:false
})

const toggleShow = () => {
  data.show = !data.show
}

const toNext = () => {
  data.showNext = true
  tab()
}



onMounted(() => {
  tab()
})
</script>

<style scoped>
form{
  margin: auto 22px 22px;
  text-align: center;
}
.form-1{
  text-align: center;
  margin: 67px auto;
}
.base-input-div{
  margin:30px auto;
  width: 421px;
  position: relative;
}


.dropdown{
  position: relative;
  width: 100%;
  text-align: start;
}


.dropdown-child{
  position: absolute;
  z-index: 2;
  background-color: white;
  width: 100%;
  top: 30px;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

}

.dropdown-child-div{
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 15px;
  gap: 15px;
}
.dropdown-child-div:hover{
  background-color: #F8F8F8;
  cursor: pointer;
}

.input-select{
  width: 100%;
  outline: none;
  border-bottom:solid;
  padding-bottom: 5px;
}

.input-select:focus{
  outline: none;
  border-bottom:solid black;
}

.form-2-inner-div-child{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
}

.form-2{
  margin: auto 100px;
}

.otp-div{
  display: flex;
  margin:30px auto;
  width: 315px;
}
.form-2-inner-h{
  text-align: center;
  font-size: 24px;

}
.form-2-inner-p{
  color:#828282;
  font-size: 16px;
  text-align: center;
}

.form-2-inner{
  margin: 25px auto;
}

.form-2-inner-div{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
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