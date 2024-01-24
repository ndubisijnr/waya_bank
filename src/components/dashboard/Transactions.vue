<template>
  <div class="wrapper">
    <div class="reminder-alert">
      <div class="reminder-alert-div">
        <img src="../../assets/icons/warn1.svg" />
        <div>
          <h5>Commission Wallet</h5>
          <p>You are yet  to link your BVN, without linked BVN
            you cannot  make more than 2 withdrawals </p>
        </div>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card">
        <div class="card-top">
          <div class="card-owner-div">
            <img src="../../assets/icons/QRcode.svg">
            <p class="card-owner"><span class="card-subtitle">Account No:</span> <br /> 0000000045 <span style="background-color: white;padding-left: 5px;padding-right: 5px"><img src="../../assets/icons/copy.svg" /> </span></p>
          </div>
          <button class="btn">Commission Wallet</button>
        </div>
        <div class="card-amount">
          <p class="card-subtitle"> </p>
          <p class="card-subtitle" style="margin-top: 2px">Account balance 1/3</p>
          <p class="amount">NGN 2850.75</p>
        </div>
      </div>
    </div>

    <div class="navs">
      <span class="navs-items" :class="{'active':currentItem === i}" v-for="i in navItems">{{i}}<img v-if="i === 'Payment Request'" src="../../assets/icons/arrow.svg" /></span>
    </div>
    <div class="search-area">
      <input class="search" placeholder="Search" />
      <div class="filter-area">
        <img  @click="sort" src="../../assets/icons/filter.svg" />
      </div>
    </div>

    <component>
      <template v-if="item === currentItem">
        <div v-if="currentItem === 'Non Waya Users'">
          <base-table />
        </div>
      </template>
    </component>

  </div>
  <modal1 v-if="isSlot">
    <template v-slot:modal1-content>
      <div class="modal-card">
         <div class="modal-card-header">
           <h3>Sort</h3>
           <img @click="close" src="../../assets/icons/close1.svg" />
         </div>

        <div class="modal-card-body">
          <form>
            <div class="select-div">
              <select class="waya-select">
              <option>Category</option>
              <option>Category</option>
            </select>
            </div>
            <div class="select-div">
              <select class="waya-select">
                <option>Service Provider</option>
              </select>
            </div>
            <div class="select-div">
             <input  class="waya-select" type="date"  placeholder="Date"/>
            </div>
            <div class="modal-card-footer">
              <base-button title="Filter Transactions" width="100%"></base-button>
            </div>
          </form>
        </div>

      </div>
    </template>
  </modal1>


</template>

<script>
import BaseButton from "../buttons/BaseButton.vue"
import BaseTable from "../table/BaseTable.vue";
export default {
  name: "Transactions",
  components:{

    BaseButton,
    BaseTable
  },
  data(){
    return{
      isSlot:false,
      item:'Non Waya Users',
      currentItem:'Non Waya Users',
      navItems:['Non Waya Users','Payment Request','Successful Transactions'],
      isViewingTrans:false
    }
  },
  methods:{
    sort(){
        this.isSlot = true
      },
    close(){
      this.isSlot = !this.isSlot
    }
  }
}
</script>

<style scoped>
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
.modal-card{
  width: 671px;
  height: 368px;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 200px auto;
}

.modal-card-body{
  margin: auto 73px;
}


.select-div{
  margin-bottom: 8px;
}
.waya-select{
  width: 525px;
  height: 50px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
}

.modal-card-footer{
  margin-top: 26px;
}
.modal-card-header{
  display: flex;
  justify-content: center;
  padding: 32px;
  align-items: center;
}
.modal-card-header > h3{
  width: 100%;
  text-align: center;
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
.navs{
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #E0E0E0;
  /*border: solid;*/
  align-items: center;
  height: auto;
  width: 100%;
  margin-bottom: 17px;

}
.navs-items{
  font-size: 12px;
  line-height: 14px;
  color: #666666;
  cursor: pointer;
  padding-bottom: 15px;
}

.navs-items:hover{
  color: #FF4400;
}

.active{
  color: #FF4400;
  border-bottom: solid #FF4400;

}

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

::placeholder{
  font-size: 12px;
}


.card-wrapper{
  display: flex;
  width: auto;
  height: 176px;
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
  width: auto;
  height: 30px;
  color: white;
}

.table{
  width:80%;
  height: 584px;
  overflow-y: scroll;
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
  justify-content: center;
  padding: 10px;
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
  width: 90%;
  display: flex;
  gap: 17px;
  justify-content: start;
}
.reminder-alert{
  width: 542px;
  display: flex;
  border: solid;
  justify-content: space-around;
  align-items: center;
  background: #FEF8F8;
  border: 1px solid #EB5757;
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