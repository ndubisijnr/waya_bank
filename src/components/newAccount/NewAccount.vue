<template>
  <modal1>
    <template v-slot:modal1-content>
      <div v-if="!isAccount" class="create-new-account" id="start">
        <div class="logo-div">
          <img src="../../assets/icons/wayalogo_2.svg" />
        </div>
        <div class="card0body">
          <h3 class="card0body-h">Create New Account</h3>
          <p class="card0body-p">Are  you sure you want to create a new account?</p>
        </div>

        <div class="card0footer">
          <p class="cancel" @click="close">Cancel</p>
          <p class="continue"  @click="createAccount">Continue</p>
        </div>
      </div>

      <div v-else>
        <bills-payment-card>
          <template v-slot:card-head>
            <h3 class="card-head-h">Name Your Account</h3>
             <i class="fa-solid fa-x" @click="createAccount"></i>
          </template>
          <template v-slot:card-body>
            <div v-if="stage">
              <div class="card-body">
                <div>
                  <input class="name-your-wallet" />
                  <p>Not more than 15 characters</p>
                </div>

                <div class="btn-area">
                <base-button title="Next" @click="next"/>
              </div>
              </div>
            </div>
            <div v-else>
              <div class="card0body">
                <h3 class="card0body-h">Input your 4 digit Pin</h3>
                <p class="card0body-p">Please Input your four digit pin to create a new account</p>

                <div class="otp-div">
                  <input type="number" class="otp" />
                  <input type="number" class="otp" />
                  <input type="number" class="otp" />
                  <input type="number" class="otp" />
                </div>

                <div class="btn-area">
                  <base-button title="Create Account" />
                </div>
              </div>
            </div>
          </template>

        </bills-payment-card>
      </div>
    </template>

  </modal1>

</template>

<script>
import Modal1 from "../modal/Modal1.vue"
import BillsPaymentCard from "../cards/billspayment/BillsPaymentCard.vue";
import BaseButton from "../buttons/BaseButton.vue"
import SuccessModel from "../modal/SuccessModal.vue"
export default {
  name: "NewAccount",
  components:{
    Modal1,
    BillsPaymentCard,
    BaseButton,
    SuccessModel
  },

  data(){
    return{
      success:true,
      stage:true,
      isAccount:false
    }
  },

  methods:{
    closeSuccess(value){
      this.success = value
    },
    close(){
      this.$emit('close', false)
    },
    createAccount(){
      this.isAccount = !this.isAccount
      this.stage =true
    },
    next(){
      this.stage = false
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar{
  display: none;
}
.btn-area{
  margin-top: 150px;
  text-align: center;
}
.card-body{
  margin:53px auto;
  width: 90%;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
  flex-direction: column;
}
.name-your-wallet{
  width: 394px;
  height: 55px;
  left: 525px;
  top: 392px;

  background: #FFFFFF;
  border: 1px solid #D9D9D9;
}
.otp-div{
  display: flex;
  margin:30px auto;
  width: 315px;
}
.create-new-account{
  width: 590px;
  height: 376px;
  background: #FFFFFF;
  border-radius: 13px;
  margin: 200px auto;
  position: relative;
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
.logo-div{
  padding: 20px;
  text-align: center;
}
.card0body{
  margin: 40px auto;
  width: 90%;
  transform: scale(.8);
}

.card0body-h{
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  text-align: center;
  color: #333333;
  margin-bottom: 34px;
}

.card0body-p{
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  color: #828282;
}

.card0footer{
  display: flex;
  justify-content: space-around;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 79px;
  align-items: center;
  /*background: #F2F2F2;*/
  border-top: solid #F2F2F2;
}
.cancel{
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #FF6634;

}

.continue{
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #FF6634;
}
.dismissal{
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: fixed;
}

.fa-x{
  position: absolute;
  top: 20px;
  right: 30px;
  cursor: pointer;
}

.card-head-h{
  color: #064A72;
  font-size: 24px;
}
</style>