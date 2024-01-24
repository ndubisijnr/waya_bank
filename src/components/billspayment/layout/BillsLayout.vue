<template>
  <div class="bills-layout">
    <modal1 :isBlur="true">
      <template v-slot:modal1-content>
        <div class="dismissal" @click="BillPaymentStore.handleBillsModal()"></div>
        <bills-payment-card>
          <template v-slot:card-head>
            <h3 class="card-head-h">{{BillPaymentStore.getBillsPaymentType?.toString().split(',')[0]}}</h3>
            <i class="fa-solid fa-x" @click="BillPaymentStore.handleBillsModal()"></i>
          </template>
          <template v-slot:card-body>
            <airtime v-show="BillPaymentStore.getBillsPaymentType?.toString().split(',')[1] === 'A'" />
            <betting v-show="BillPaymentStore.getBillsPaymentType?.toString().split(',')[1] === 'B'" />
            <utility v-show="BillPaymentStore.getBillsPaymentType?.toString().split(',')[1] === 'U'" />
            <cable v-show="BillPaymentStore.getBillsPaymentType?.toString().split(',')[1] === 'C'" />
            <data-purchase v-show="BillPaymentStore.getBillsPaymentType?.toString().split(',')[1] === 'D'" />
          </template>
        </bills-payment-card>
      </template>
    </modal1>
  </div>

</template>

<script setup>
import Modal1 from "../../modal/Modal1.vue"
import BillsPaymentCard from "../../cards/billspayment/BillsPaymentCard.vue"
import {useBillPaymentStore} from "../../../stores/billspayment.js";
import Airtime from "../../forms/billspayment/Airtime.vue";
import Betting from "../../forms/billspayment/Betting.vue";
import Cable from "../../forms/billspayment/Cable.vue";
import DataPurchase from "../../forms/billspayment/DataPurchase.vue";
import Utility from "../../forms/billspayment/Utility.vue";
const BillPaymentStore = useBillPaymentStore()


</script>

<style scoped>

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