<template>
  <modal1>
    <template v-slot:modal1-content>

      <div>
        <bills-payment-card>
          <template v-slot:card-head>
            <img @click="type='choose'" v-show="type != 'choose'" src="../../assets/icons/back.svg" style="position:absolute;left: 50px"/>
            <h3 class="card-head-h">Transfer Funds</h3>
            <i class="fa-solid fa-x" @click="close"></i>
          </template>
          <template v-slot:card-body>
            <!-- first stage -->
            <div v-show="type == 'choose'" class="body-wrapper">
              <div>
              <p class="transfer-choice">Kindly select your choice of Transfer</p>
            </div>

              <div class="select-transfer-type-wrapper">
                <div @click="type='own'" class="select-transfer-type">
                  <img src="../../assets/icons/transfer_icon.svg" />
                  <div>
                    <h4 class="h">Transfer to own Account</h4>
                    <p class="p">Transfer to own Account</p>
                  </div>

                </div>
                <div @click="type='other'" class="select-transfer-type">
                  <img src="../../assets/icons/transfer_icon.svg" />
                  <div>
                    <h4 class="h">Transfer to other Bank</h4>
                    <p class="p">Transfer to other Bank</p>
                  </div>

                </div>
              </div>
            </div>
            <!-- second stage -->
            <form @submit.prevent="next" class="body-wrapper" v-show="type == 'own'">
              <div>
                <p class="transfer-choice">Transfer to Own Account</p>
              </div>

              <div>
                <base-input  :placeholder="'Account to Credit'" :detail="'Select Account to transfer from'" />
                <base-input  :placeholder="'Account to Debit'" :detail="'Select Account to transfer to'"  />
                <base-input  :placeholder="'Amount'" :detail="'How much do you want to Send?'" />
                <base-input  :placeholder="'Add a Note (optional)'" :detail="'Add descriptive notes'" />
              </div>

              <div class="btn-area">
                <base-button title="Next"  />
              </div>
            </form>
            <!-- third stage -->
            <form @submit.prevent="next" class="body-wrapper" v-show="type == 'other'">
              <div>
                <p class="transfer-choice">Transfer to Other Account</p>
              </div>

              <div>
                <div class="base-input-div">
                  <p>Select Bank</p>

                  <div class="input-select">
                    <input type="text" @input="filterSearch()" v-model="search" style="width: 100%">
                    <div class="dropdown">
                      <img @click="toggleShow" src="../billspayment/assets/icons/icon_down.svg" style="cursor:pointer;position:absolute;right: 10px;top:-10px" />
                      <div class="dropdown-child" v-if="show || this.filteredBank.length > 0">
                        <div class="dropdown-child-div" v-for="i in filteredBank.length > 0 ? filteredBank : bankList" :key="i">
                          <img :src="i.logo" width="30"/>
                          <p>{{ i.name }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <base-input  :placeholder="'Account to Credit'" :detail="'Select Account to transfer to'"  />
                <base-input  :placeholder="'Account to Debit'" :detail="'Select Account to transfer from'"  />
                <base-input  :placeholder="'Amount'" :detail="'How much do you want to Send?'" />
                <base-input  :placeholder="'Add a Note (optional)'" :detail="'Add descriptive notes'" />
              </div>

              <div class="btn-area">
                <base-button title="Next"/>
              </div>
            </form>
            <!-- fourth stage -->
            <form v-show="type == 'next'">
              <div class="card0body">
                <h3 class="card0body-h">Input your 4 digit Pin</h3>
                <p class="card0body-p">Please Input your four digit pin to create a new account</p>
                <div class="form-2-inner-div">
                  <div class="form-2-inner-div-child">
                    <p>Receipient</p>
                    <p>Own Account</p>
                  </div>
                  <div class="form-2-inner-div-child">
                    <p>Amount</p>
                    <p>40,000</p>
                  </div>
                  <div class="form-2-inner-div-child">
                    <p>Beneficiary Bank: </p>
                    <p>UBA</p>
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
                <div class="btn-area">
                  <base-button title="Confirm" />
                </div>
              </div>

            </form>
          </template>
        </bills-payment-card>
      </div>

    </template>
  </modal1>

</template>

<script>
import Modal1 from "../../components/modal/Modal1.vue"
import BillsPaymentCard from "../cards/billspayment/BillsPaymentCard.vue";
import BaseButton from "../../components/buttons/BaseButton.vue"
import BaseInput from "../../components/inputs/BaseInput.vue"
export default {
  name: "TransferFunds",
  components:{
    Modal1,
    BillsPaymentCard,
    BaseButton,
    BaseInput
  },
  data(){
    return{
      show:false,
      bankList:[
          {logo:"https://th.bing.com/th?id=OIP.kk9H_bDaufNrACOvEslYJQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2", name:"GTBank"},
          {logo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAM8BLAMBIgACEQEDEQH/xAAaAAEBAAMBAQAAAAAAAAAAAAAAAQMEBQYC/9oACAEBAAAAANRCIRCIQhEAG2iEQhEIgiADbRCIRCIQRABtohEIRCIIgA20QiEIhEIQAbaIRCEQhM+x9/OtrAG2iEQhEPrL9/WLDPvc6PK0ANtEIhCF+b8oRPr13k8YNtEz52vrkI9L5zGQhHpeToA20T0/K+NXBLEPXeQRBIeo4OqDbRPW+SjtZdPU610dL03M2vPbHRzaOp2cWx5r1nj+o5Q20ZvScXDtOQ9R5j59Zwt3g9e8Z9eo0dXl+h0O7wtvghto3+lysXf81j3Op5563l4OX1cuts5frJwdX1PJ7mp5oG2jr/HKnrfIunm4u12HG1PRa2bz/V+ux4/59nw8/R8n8Bto9BpamP0HHw/XY4He4vo/K7nT0c3C9Dz+94/J6nR0fvc88G2jdztXB08HN6Gzzdbp7GtzL1cuvobfNy7bSx9jkQbaMpCEEIgiBgDbRPv4iEIn38IhEPv4Btp99Bo5NTcy6jLpOn8YPrDPv5mt08fzh+82phDbT72Pve5up0MDpaGju58JNfbxud1oxN/gfIbaZF+5rZsO58Y8GZDJ8z5YdzGxvvDiDbRCIQiEQRABtohEIRCIIgA20QiEIhEEQAbaIRCEQiCIANtCIRCEIhEAL//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/aAAoCAhADEAAAAPofMWFJYUlJSVQE7cFJSWFJZQlUA7edYWFhSWUzqXUAO3nUlhYVYmpUXGzeA7edefXOt87JTj26cwJV5devIO3nXz+npxx1ucblo1nOs6slW56czt5183p7ceXbpyxvOzWcbs59O3Dl3l7+cO3nXz+jeMdN8+fTWcb1JSXfPn23zl3g7edeWlhSUlFhQ1KO3nmuPatYzvN3jn1sslsx0Rd8qO3nllmrJZRYlVJoLA7edYUlhSWFJVAO3nUlJYUlJSVQD//EAD8QAAIBAwICBwUGAgkFAAAAAAECAwAEEQUSE1IQITFRYZGSFSIwMkEUICNTYnE0QiRAQ3BzgYKxwTNjZKGi/9oACAEBAAE/AP71e04pLW6k+SCQ/wCVDS79v7CvY99yJTaTfL/Zr6qezu4+toH/AK8kbv8AKpPj2ChFEP8AqTj9kG80JbRPlti575G/4Fe0bheqMRxeCIBTXl2/bcSedGWU9sj+o1xH528zS3NynyzyD/Uai1a7T5iHpJLHUhh0xLV5YPa4b5oz2N/WfqB9TTqyMVYYYdo6CxbtJPwVZkYMpIYHINQOl7aKXHU64YVNGYZZIz2oxHxIbeafPDTIFezbvkX1V7Nu+RfVU1vLAVEgAJHwdOto44I5Ng3suS1SvvkkfmYn4mjHNrJ4S1qgxfTfEsU2WkPiM1JqVyJHCsuAxx1V7Tu+ZPTU9xJcMGkIyBjoyO/7mR39B6+oVJiC0f8ARF93IFZHf9zI7x06QuLMHndjV8/Eu52/WfiHEUDdyR/7D7ltpqKu+59P0FG805PdVPSlXrWLxK8IG8mrW1e6chepR8zUy6fYgBlDP6mqK6sblhGYgCewMoq/sRABLF8lWyb7mBe9xV20CwNxydhNC901eoWp9Io2lleRb41A7mWpoXglaN+1asYbaV3477VUA19q0qDqjiz4hKiudPuiE2AE/R0rUbBIFE0XUmcFasbVbqco5IULk1Imm2QXfEuT4bjQ1Ow/Ib0LRtbG8i3oq+DLU8TW8skb9q1aqIbKEcsWTRJYkn69dadYcciWUfhfQc1ahJaKTDbwx/qcD4Nsm+5hXvcVco8sEiJjcwr2Xdd8dTWM8EZdymK0uAO7TN2J1LWqXBL8BexetujBOAO2kRLG0P6FyfFqd2kdnc5Zjk1kjrHaOsVcKJLSbxiJrS03XanlQmtYfCQJ3kt0aO5E0qfQpmtZQB4H71I6YsmWIKesuuPOtSIFjN/prRU6p3/Za1d83QXlQdGig8Cb/ErUxvvyg/QtXzcOynI5NtWFgbkiRx+CD661C/C5ggPgzj4WmpuugeVSa1C4kgSLhthmavaN7+eamu7iddskhYVYoI7SEd67jUrmSR3P8zE9Fgge7i8CWrVXxbovM/RjOB3nFXJCWk/hGRWjp1zv+y1qz5uVXlQdGjg/aJG7o61lvegXuVjVrpss4DudiUTpNr1BOM9Wt+s06Qx2yoprWHxbxJzPWkptswed2NXz77ydv1kdGlJtso/Elqi/H1bP04zN6au4knWOF3wGf1Ba1OaS2gRIl2q2VLfD0lOuZ/2WtWbM0adydB7DQ/hxj8r/AI6dJ/im/wAM1rHbB+zdFjGZbqIdx3H/ACrVZQluqfV2rSkxa55nNXz8S8nb9fRpMRSBpOc1hL7U2+scdatOyIkK/wA/W3Ro6ZuJH5Y61p/xYl5Uq2HBtIRyxAmiSxJP1OaPYajHAtF/7cX+wrRlLXLvyx1rEzJNa7DhkBehwr+08HHpapI3id43GGU4PwtMXFtnmcmr6C5lupWWFitfY7r8h6kt5olzJGygnFWEwltk5kG1qurGaKRtiM6E9RFfZLnY7mIqqjJzVjKIblGJwpyprUbZp4lKDLpQgnZtohcn9qs7ZbOJ5JSAxGWNXdybmYv2L2KKtF4VpAO5KdZCxLI4JJJypq10+adgXUpHV/dpbRcCL5yPQK0dws8i8yVq8EjtHKqkgJg9GkRMkcrspG5qv/xtQdBzqlXrcOznI5MdEKcSaJOZ1Fai+yyn8QFrRU/CnfvcCtVfN7IOUBa0q64Uxib5JK1a13oJ0HWvU/wre/lt02BVYV7Wl/KSva0v5SVc3r3KorIoCmoZ5IH3xmhq/fB5NU+pzSoyKqop6INSmhUIwDrR1jug82q4u5rn526h2KOiHVJ4wFYK4r2z/wCP/wDVS6rcuMJiOjk0rMrBlJBByCKi1eZRh41evbK/S183qTV7lhhFRKjmZJ1mPvMH3df1NXOpS3MJiKKo6IJTBMkoUEocgGrrUZLqIRsiqMg1a6i9rEI1iQ1NIZpXkbtdiegaxNtw0KNRwSSBgd3wcW/NL5CsW/NL5CsW/NL5CsW/NL5CsW/NL5CsW/NL5CsW3NL5CsW/NL5CsW3NL5CsW3NL5CsW3NL5CsW3NL5CsW3NL5CsW3NL5CsW3NL5CsW3PL5CsW3PL5CsW3PL5CsW3PL5CsW3PL5CsW3PL5CsWvPL5CsWvPL5CsW3PL6RWLXnl9IrFrzy+kVi155fSKxa88vpFYteeX0j4ZRwgcqdpOAfiyRSRECRCpIyAfiiORkdwpKLjJ7s/CR+G27YrdXYwyKvHWEoiwQ5MQLHZUsX9Es0Mkae6XO481SwSxSCMjLNjbjrzmvsbklBLEZOQHosY0eVy6hlSJnq1Zbp3ilijxw2YMFClajgDoGaeJPBjT2sqzJDgFmxtweo5oWTFzGs8Jk5ATRBBIIwRXWewZNTwRJZugUcSF0Dv4tWmRgzmUsmIlLUIJZ5ZvxUbaNzyFjioIpVufwJYyyIX3/SooZLgu+QFHW7scAU0GJFRZomz/MGwtG0JR3SaKTYMsFNR2rvFxmkjSPJUFjU1s8Ko+5HR+xl6JiLSC0CRxb3i3uzIGq8RODaShFSSRCWUUliXbYtxAX5A1Q20k7SBSqhBlyxwBTWjcJ5UljlVPm218mleMs//pamgeDaHIDkZKfVf3+DEu+WNeZwKv233k37ha1H+I4fIipRwL18nHAtailt4JEkVZXZT9SAKY5YnvJNWhWO1vJXBIO1KNyFRo4IQgfqY5LMaliitm4bqZJcDIzhQTXV7UTlghrT/fvVc/QM5pmLMWP1JNWKIrPcOwCxdhPOagRGgvgJxIWjD9hFWvuWd/J4KgqH3NOun55ESrPKW1/L3RhPVVx+HYWSDsfdI1QQCRJZXYrFHjOO0k9gFQNELW+kSLZhAmSxYndV17llYR96s5q59yxsY+8M5rBYhR2k486v7ow3ZURwsIlUZZKubUz3cWHI4sQkct1lBVgbX7WmyJsIGfe7VC2LC+lPbJIqVb+5p97JzsiUihYbZFGZ0tjJED3tTMzMWYkknJJ+DDKYZUkABKmuIeNxSATv3U8xeczMBkuGxQu5BcPOAMt2rTzQlSEtkQn65J6OO32fgBRgvuJrsprpHcSvbIZO/cQDQu3D3D4BaVSpqCdoOLtUEuhToeYtDHCFAVCT+5NW87W7OwUHchUg0JyLYwBRgvvJozsbdIMAKrls0J2W3eAKMM4YmkuwIVhlgSVVJKZJBFR3OwTIYkaOQ5KU9wDAYI4giFst1liauJ2uChKhQqBABU87TmPKhQiBABSOUdHABKsD5U95E8hlNnGZCc5LMRS3swuGnOGZgVYHsIpbpIhJwbdULoVJLFqM7G2W3wAocvmjOTai22gLvLk1JeSPcRzgBWQKFA8KmkE0ryBAm45wP7wwCa//xAAsEQEAAgIBAwIEBQUAAAAAAAABAAIREiEDMVIgUSIyQWJCUGFjkRMjMHGh/9oACAECAQE/APzLY9ybV95kf8/PvNSYPaYI0Ppwyll4e/q6l9Cf3fthnHPf0dV7Hrr89vV1nmpN6+UtZtbSr/th0wRywz1F5+EiaWMPDL89SpLVwZFg7VjQx3YWdGVpkFWVUskogWWVFcvpfi601r7E6XLdl+K2nS+Ql+b1JXnqLOo4qwUK1O8tUKq8x4oQ4CH42BjVe3q16hdsBB6meQxNb0stTIw2RLQOpQxjMrRHa3eBeq8ZzNWzm38S1bbbEtvYxriNX4fYj2mrok1+HEoIYfTp+5af03ztNHztNHztNHztNPvtNHztNP3LTR87TR87TR87TR87TR87TT77QMfVfQ9mB8n8zaycd8S+dZ2z9M/SbWTPsZi4Mz8Nj9Yrh/iD3czL2/WDxD6LMsV/7D0MwTUiZiDNT2mJgmCakwTHGJqTBMH5V//EACkRAAICAQIFAwQDAAAAAAAAAAECABESAyEgMVFhYiIyQRMjUJEwQnH/2gAIAQMBAT8A/JBW6TBukoj+cEdJkZZ6yz1gc/O4jqBRHI8Wkgdt59nyhq9uXBojmeNvYvFoD0sYUcblTEUKubD/AAQ6hYEUIa0gNrYxfuK1jcRPTpkxHyNECEYOYNQ3yEKj6gjPRoARgCoNRwSVAjEKMRwi10LmTHmxmtsqCILdZq+8zT2RjG20lE0hbCEAlnPKKxLAAACDfUY9BDuYR7BCbyA58WWmUVSSIRpUaY3MkdQGNEQlVYFYx03Nk1HcEBV5QlHA9VVMlUUv7ispXFouCm8rgcU3UwVYma532mXquOVJscN+ImXiJl2Ey8RMuwl9hL8RL8RL7CX2EvsJfYS+wl9hL4BdiE+/pdQooO/WIBlNjXzXzMVBrqagFtU/spr4gAsfuULAqUtX2hAuHewJQgA/Yh4AalmZtASIGImR6wGWZZmRmRMs3cyMyMyP4r//2Q==", name:"Eco Bank"},
          {logo:"data:image/jpeg;base64,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", name:"First Bank"}
      ],
      filteredBank:[],
      search:null,
      type:'choose'
    }
  },
  methods:{
    next(){
      this.type = 'next'
    },
    close(){
      this.$emit('close', false)
    },
    toggleShow() {
     this.filteredBank = []
     this.show = !this.show
    },
    filterSearch(){
      this.filteredBank = this.bankList.filter(it => {
        let searchQuery = it.name
        return searchQuery.toLowerCase().includes(this.search.toLowerCase())
      })
    }
}
}
</script>

<style scoped>
.base-input-div{
  margin:30px auto;
  width: 421px;
  position: relative;
}

.h{
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */

  letter-spacing: 0.2px;

  color: #1C1C1C;

}

.p{
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */

  letter-spacing: 0.2px;

  color: #7D7D7D;
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
  box-shadow: 2px 4px 6px 2px rgba(0, 0, 0, 0.1);
  border-radius: 14px;

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

.form-2-inner-div-child{
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 22px;
}
.form-2-inner-div{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
.body-wrapper{
  margin: 44px auto;
  width: 90%;
}

.select-transfer-type-wrapper{
  margin: 44px auto;
  width: 90%;
}
.transfer-choice{
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  color: #4F4F4F;
}
.select-transfer-type{
  background: #FFFFFF;
  border: 1.5px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  margin-bottom: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;
}
::-webkit-scrollbar{
  display: none;
}
.btn-area{
  margin-top: 30px;
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
  transform: scale(.9);
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