<template>
  <div class="dashboard" v-if="layout === 'dashboard'">
    <side-bar-links :sideBarMainItems="sideBarMainLinks"  :sideBarFooterItems="sideBarFooterLinks"/>

    <div class="layout-content-cooperate-personal">
      <div>
        <header v-if="route !== '/settings'">
          <div class="header-one">
            <div class="header-top">
              <div>
                <p class="text-h5">Wayabank</p>
              </div>
              <div class="dotted-menu">
                <img src="../../assets/icons/3dotted.svg" class="dotted" />
                <div class="wallet-dropdown">
                  <p class="wallet-dropdown-item">Manage Card</p>
                  <p class="wallet-dropdown-item" @click="data.createNewAccount = true">Create New Account</p>
                </div>
              </div>
            </div>
            <div class="payment-nav">
                <div class="payment-nav-child"  @click="data.fundTransfer = true">
                  <img src="../../assets/icons/transfer.svg" />
                  <span>Transfer</span>
                </div>
                <div class="payment-nav-child">
                  <img src="../../assets/icons/recieve.svg" />
                  <span>Receive</span>
                </div>
                <div class="payment-nav-child">
                    <img src="../../assets/icons/withdraw.svg" />
                    <span>Withdraw</span>
                </div>
                <div class="payment-nav-child">
                  <img src="../../assets/icons/request.svg" />
                  <span>Request</span>
                </div>
              </div>
          </div>
        </header>
        <main style="width: 100% !important;">
          <router-view  v-slot="{Component}">
            <transition name="route" mode="out-in">
              <component :is="Component"></component>
            </transition>
          </router-view>
        </main>
      </div>
      <div style="width: 100%" v-if="route !== '/settings'">
        <aside>
          <div class="aside-top">
            <div class="aside-top-nav">
              <v-switch />
            </div>
            <div class="bills">
              <h4 class="bills-h">Bills</h4>
              <div class="bills-payment">
                <div class="bills-payment-child" @click="BillPaymentStore.handleBillsModal(['Betting', 'B'])">
                  <img src="../../components/billspayment/assets/icons/BettingIcon.svg" />
                  <span>Betting</span>
                </div>
                <div class="bills-payment-child" @click="BillPaymentStore.handleBillsModal(['Pay Utility Bills', 'U'])">
                  <img src="../../components/billspayment/assets/icons/UtilityIcon.svg" />
                  <span>Utility</span>
                </div>
                <div class="bills-payment-child" @click="BillPaymentStore.handleBillsModal(['Cable Subscription','C'])">
                  <img src="../../components/billspayment/assets/icons/CableIcon.svg" />
                  <span>Cable</span>
                </div>
                <div class="bills-payment-child" @click="BillPaymentStore.handleBillsModal(['Airtime Purchase','A'])">
                  <img src="../../components/billspayment/assets/icons/AirtimeIcon.svg" />
                  <span>Airtime</span>
                </div>
                <div class="bills-payment-child" @click="BillPaymentStore.handleBillsModal(['Data Purchase','D'])">
                  <img src="../../components/billspayment/assets/icons/DataIcon.svg" />
                  <span>Data</span>
                </div>
                <div class="bills-payment-child" @click="BillPaymentStore.handleBillsModal(['Pay Utility Bills','O'])">
                  <img src="../../components/billspayment/assets/icons/Others.svg" />
                  <span>Other Bills Payment</span>
                </div>
              </div>
            </div>
          </div>
          <div class="download-app">
            <h3 class="download-app-h">Download our App</h3>
            <p class="download-app-p">Download our mobile application for
              better experience and to receive custom
              notifications in real time.</p>
          <div class="download-app-icon">
            <img src="../../assets/icons/appstore.svg">
            <img src="../../assets/icons/playstore.svg">
          </div>
          </div>

          <div class="download-app">
            <img src="../../assets/icons/close.svg" style="position: absolute;right: 40px;top: -20px"/>
            <h3 class="download-app-h">Explore Wayabank</h3>
            <p class="download-app-p">Free internet banking and bills payment </p>
            <div style="text-align: center;margin-top: 32px">
              <button class="explore-wayabank">Explore wayabank</button>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <bills-layout v-show="BillPaymentStore.isPaymentModal" />
    <new-account v-show="data.createNewAccount" @close="close"></new-account>
    <transfer-funds v-if="data.fundTransfer"  @close="close"></transfer-funds>
    <success-modal v-if="data.success" @closeSuccess="closeSuccessModal"/>
  </div>
</template>

<script setup>
import {computed, ref, reactive} from "vue";
import mainSideBarItems from "../../components/sidebar/sidebarLayout/utils/mainSideBarItems";
import footerSideBarItems from "../../components/sidebar/sidebarLayout/utils/footerSideBarItems";
import SideBarLinks from "../../components/sidebar/sidebarLayout/SideBarLinks.vue"
import BillsLayout from "../../components/billspayment/layout/BillsLayout.vue"
import SuccessModal from "../../components/modal/SuccessModal.vue"
import {useBillPaymentStore} from "../../stores/billspayment.js";
import router from "../../router";
import NewAccount from "../../components/newAccount/NewAccount.vue";
import TransferFunds from "../../components/transferFunds/TransferFunds.vue";

const BillPaymentStore = useBillPaymentStore()

const isShowing = ref(true)

const data = reactive({
  createNewAccount:false,
  success:false,
  fundTransfer:false
})

const sideBarMainLinks = computed(() => {
  return mainSideBarItems
})
const sideBarFooterLinks = computed(() => {
  return footerSideBarItems
})

const layout = computed(() => {
  return router.currentRoute.value.meta.layout
})

const route = computed(() => {
  return router.currentRoute.value.path
})

const close =  (value) => {
  data.createNewAccount = value
  data.fundTransfer = value
}

const closeSuccessModal = (value) => {
  data.success = value
}

</script>

<style scoped>
.dotted-menu{
  cursor: pointer;

}
.dotted-menu:hover > .wallet-dropdown{
  display: flex;
  transform: translate(-10%, -5%);
  align-items: start;
  justify-content: start;
  flex-direction: column;
  gap: 17px;
  padding: 14px;
}
.wallet-dropdown-item{
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: left;

  color: #1C1C1C;
  border: springgreen;
}
.wallet-dropdown{
  width: 201px;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 14px;
  position: absolute;
  z-index: 99;
  display: none;
}
.download-app{
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  width: 90%;
  padding: 13px;
  position: relative;
  margin: 20px auto;

}
.explore-wayabank{
  width: 122px;
  height: 34px;
  background: #FF4400;
  border-radius: 3px;
  color: #FFFFFF;
  font-size: 12px;
}

.download-app-p{
  font-size: 16px;
  line-height: 20px;
  /* or 125% */
  text-align: center;

  color: #828282;

}

.download-app-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 28px auto;
}

.download-app-h{
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  color: #333333;
  text-align: center;
  margin-bottom: 15px;

}
.dashboard{
  width: 100%;
  display: flex;
}

.header-top{
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bills-payment{
  width: 100%;
  /*border: solid;*/
}

.bills-h{
  margin-bottom: 44px;
}

.aside-top{
  width: 100%;
  transform: scale(.9);
  /*margin: 30px auto;*/
}

.bills-payment-child{
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  height: 42px;
  width: 100%;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
  padding-left:15px;
  cursor: pointer;
}


.header-one{
  border: 1px solid #F2F2F2;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 10px;
}

.layout-content-cooperate-personal{
  width: 100% ;
  display: flex;
  height: 100vh;
  margin-left:329px;
  /*border: solid crimson;*/

}

.payment-nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  /*border: solid;*/
}

.payment-nav-child{
  font-size: 14px;
  display: flex;
  gap: 17px;
  padding: 14px;
}

.payment-nav > img {
  padding-left: 17px;
}


.aside-top-nav{
  /*border: solid;*/
  width: 100%;
}

/* basic css grid omo */

.layout-content-cooperate-personal > div:nth-child(1){
  /*transform: scale(.9);*/
  /*height: 100vh;*/
  display: flex;
  width: 100%;
  flex-direction: column;
  /*grid:'h h h'*/
  /*      'm m a';*/
  /*grid-template-rows: 138px auto;*/
  /*grid-template-columns: auto 1fr 30%;*/
  /*border: solid crimson;*/
}

.layout-content-cooperate-personal > div:nth-child(2){
  /*transform: scale(.98);*/
  display: block;
  width: 100%;
  /*flex-direction: column;*/
  /*grid:'h h h'*/
  /*      'm m a';*/
  /*grid-template-rows: 138px auto;*/
  /*grid-template-columns: auto 1fr 30%;*/
  /*border: solid crimson;*/

}


header{
  grid-row: 1 ;
  grid-column: 1 / span 2;
}


main{
  grid-row:2;
  grid-column: 1 / span 2;
  /*border: solid crimson;*/
  width: 100% !important;
}


.layout-content-cooperate-personal > div > header, main, aside{
  /*border: solid;*/
  width: 100%;
}

.layout-content-cooperate-personal > div > aside{
}



</style>