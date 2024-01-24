<template>
  <div class="wrapper">
    <div class="reminder-alert">
      <div class="reminder-alert-div">
        <img src="../../assets/icons/warn1.svg" />
        <p>You are yet  to link your BVN, without linked BVN
          you cannot  make more than 2 withdrawals </p>
      </div>
      <h3 class="link-bvn">LINK BVN</h3>
    </div>
    <div class="card-wrapper">
      <div class="card">
       <div class="card-top">
         <div class="card-owner-div">
           <img src="../../assets/icons/QRcode.svg">
           <p class="card-owner"><span class="card-subtitle">Account No:</span> <br /> 0000000045 <span style="background-color: white;padding-left: 5px;padding-right: 5px"><img src="../../assets/icons/copy.svg" /> </span></p>
         </div>
         <button class="btn">Top up</button>
       </div>
       <div class="card-amount">
         <p class="card-subtitle">Account balance 1/3</p>
         <p class="amount">NGN 2850.75</p>
       </div>
      </div>
      <div class="card">
       <div class="card-top">
         <div class="card-owner-div">
           <img src="../../assets/icons/QRcode.svg">
           <p class="card-owner"><span class="card-subtitle">Account No:</span> <br /> 0000000045 <span style="background-color: white;padding-left: 5px;padding-right: 5px"><img src="../../assets/icons/copy.svg" /> </span></p>
         </div>
         <button class="btn">Top up</button>
       </div>
       <div class="card-amount">
         <p class="card-subtitle">Account balance 1/3</p>
         <p class="amount">NGN 2850.75</p>
       </div>
      </div>
    </div>
    <div class="search-area">
      <form>
        <input class="search" placeholder="Search" />
      </form>
      <div class="filter-area">
        <img src="../../assets/icons/filter.svg" />
      </div>

    </div>
    <base-table @click="view" />
  </div>
  <modal1 v-if="trans">
    <template v-slot:modal1-content>
      <div class="trans-receipt">
        <div class="head">
          <div>
            <img src="../../assets/icons/wayalogo_2.svg" />
          </div>
          <p class="head-p">Retrieved Transaction</p>
          <div>
            <img src="../../assets/icons/close1.svg" @click="trans = !trans"/>
          </div>
        </div>
        <div class="body">
          <div class="body-div">
            <p class="key">Transaction Status:</p>
            <p class="value"><span class="success">Successful</span></p>
          </div>
          <div class="body-div">
            <p class="key">Transaction amount:</p>
            <p class="value">NGN 4,000.00</p>
          </div>
          <div class="body-div">
            <p class="key">Transaction date:</p>
            <p class="value">Jan 17 2021, 09:21 GMT +1</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
          <div class="body-div">
            <p class="key">Reference number:</p>
            <p class="value">0109074311</p>
          </div>
        </div>
      </div>
    </template>
  </modal1>
</template>

<script>
import BaseTable from "../table/BaseTable.vue";
import Modal1 from "../modal/Modal1.vue"

export default {
  name: "Payment",
  components:{
    BaseTable,
    Modal1,
  },
  data(){
    return{
      trans:false
    }
  },
  methods:{
    view(){
      this.trans = !this.trans
    }
  }
}
</script>

<style scoped>
.card-owner-div{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.search{
  width: 532px;
  height: 37px;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 5px;
  margin: 17px 13px;
  outline-color: #E2E2E2;
  padding:12px;
  font-size: 12px;
}
.head-p{
  ont-weight: 500;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #333333;

}
.success{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #219653
}
.value{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #333333
}
.key{
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #828282
}
.body-div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
}
.body{
  width: 400px;
  margin: 49px auto;
}
.head{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border-bottom:solid #EDEAEA;
}
.trans-receipt{
  width: 769px;
  height: 753px;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 100px auto;
}


.filter-area{
  width: 48px;
  height: 37px;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  border-radius: 5px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-wrapper{
  display: flex;
  max-width: 750px;
  height: 176px;
  overflow-x: scroll !important;
  position: relative;
}
.card-subtitle{
  color: #FFFFFF;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */

}
.card-top{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.amount{
  color: #FFFFFF;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */


}
.card-owner{
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */


  color: #FF4400;
}
.btn{
  background: #0D0D0D;
  border: 1px solid #4F4F4F;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  width: 68px;
  height: 30px;
  color: white;
}

.table{
  width:100%;
  height: 584px;
  overflow-y: scroll;
}
::-webkit-scrollbar{
  display: none;
}
.filter{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.transaction-table-narration{
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  color: #333333;
  margin-bottom: 8px;
}
.transaction-table-datetime{
  font-size: 10px;
  line-height: 12px;
  /* identical to box height */


  color: #828282;
}
.ref-text{
  font-size: 12px;
  line-height: 14px;
  text-align: right;

  color: #828282;

}
.transaction-table-amount{
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: #219653;
}
.ref{
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
}
.transaction-table-div{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}
.transaction-table{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
}
.wrapper{
  transform: scale(.97);
  /*margin: auto 16px;*/
  /*border: solid;*/
  width: 100%;
}
.transaction-history-search-text{
  background: #F8F8F8;
  border: 1px solid #E0E0E0;
  border-radius: 4px 0px 0px 4px;
  width: 232px;
  height: 40px;
  text-align: center;
  padding: 8px;
}
.transaction-history-search{
  display: flex;
  align-items: center;
  width: 517px;
  height: 40px;
  margin: 15px 9px;
}
.search-area{
  display: flex;
  width: 100%;
  height: 81px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
}
.card{
  background-image: url("../../assets/background_images/cardBackground.svg");
  width: 544px;
  height: 156px;
  border: 1px solid #E0E0E0;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  padding: 17px;
  /*position: absolute;*/
  flex-shrink: 0;

}
.reminder-alert-div{
  width: 75%;
  display: flex;
  gap: 17px;
  justify-content: space-around;
}
.reminder-alert{
  width: 542px;
  display: flex;
  border: solid;
  justify-content: space-around;
  align-items: center;
  background: #FEF8F8;
  border: 1px solid #EB5757;
  height: 54px;
  border-radius: 4px;
  margin-bottom: 10px;

}
.link-bvn{
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  color: #064A72;

}
</style>