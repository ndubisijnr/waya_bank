<template>
    <div class="wrapper">
      <div class="wrapper-1">
        <div>
          <div class="profile">AG</div>
          <p class="">Adeyanju Gabriel</p>
          <p class="">Acct: 0109074310</p>
        </div>
        <div class="">
          <div class="wrapper-1-div">
            <div class="update-limit">
              <img src="../../assets/icons/update.svg" />
              <span @click="isUpdateLimit = !isUpdateLimit">Update Limit</span>
            </div>
            <p class="Maximum-daily-transaction ">Maximum daily transaction volume limit: N10,000.00</p>
            <p class="Maximum-daily-transaction">Maximum daily transaction count: 0</p>
          </div>


          <div>
            <p><img src="../../assets/icons/earn.svg" /> T2: <span>Upgrade</span> your account to do larger transactions </p>
            <div class="referral-wrapper">
              <div class="referral">
                <h5>Invite & Earn</h5>
                <div>
                  <span class="amount-earn">Amount Earn:</span><br />
                  <span>N0.00</span>
                </div>
              </div>
              <p class="referral-code">Referral Code: <span>BYJ645295</span></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="inner-nav">
          <div class="settings-nav-item">
            <div>
              <h3 class="settings-nav-item-h" @click="isProfile = true">Edit Profile</h3>
            </div>
            <img src="../../assets/icons/Settings/Rarrow.svg" />
          </div>
          <div class="settings-nav-item">
            <div>
              <h3 class="settings-nav-item-h">Hide Balance</h3>
            </div>
            <img src="../../assets/icons/Settings/Rarrow.svg" />
          </div>
          <div class="settings-nav-item">
            <div>
              <h3 class="settings-nav-item-h">Account Statment</h3>
            </div>
            <img src="../../assets/icons/Settings/Rarrow.svg" />
          </div>
          <div class="settings-nav-item">
            <div>
              <h3 class="settings-nav-item-h">Change Password</h3>
            </div>
            <img src="../../assets/icons/Settings/Rarrow.svg" />
          </div>
          <div class="settings-nav-item">
            <div>
              <h3 class="settings-nav-item-h">Change Pin</h3>
            </div>
            <img src="../../assets/icons/Settings/Rarrow.svg" />
          </div>
        </div>
      </div>
    </div>
    <modal1 v-if="isUpdateLimit">
      <template v-slot:modal1-content>
        <div class="modal-card">
          <div class="modal-card-header">
            <img @click="close" src="../../assets/icons/close1.svg" />
          </div>
          <div class="modal-card-body">
            <form>
              <div class="select-div">
                <div class="label">
                  <label>Daily Transaction volume Limit</label>
                </div>
                <span class="daily-transaction-span">Note that you can set beyond your limit but you can set below your limit</span>
                <input class="update-limit-input" />
              </div>
              <div class="select-div">
                <div class="label">
                  <label>Daily Transaction Count</label>
                </div>
                <input class="update-limit-input" />
              </div>
              <div class="modal-card-footer">
                <base-button title="Save Changes" width="100%"></base-button>
              </div>
            </form>
          </div>
        </div>
      </template>
    </modal1>
    <modal1 v-if="isProfile">
      <template v-slot:modal1-content>
        <div class="modal-card-profile">
          <div class="modal-card-header">
            <p class="save-cancel" @click="closeProfile" >Cancel</p>
            <h3 class="update-profile">Update Profile</h3>
            <p class="save-cancel">Save</p>
          </div>
          <div class="modal-card-body">
            <div class="top-profile">
              <div class="profile">AA</div>
              <p>Upload profile image</p>
              <p>Acct Number; 333XXXXXX</p>
            </div>
            <div class="profile-form-area">
              <base-input :type="'text'"
                          :placeholder="'First Name'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'Last Name'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'Date of Birth'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'Gender'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'Email'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'Phone number'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'District/State'"
                          :required="false" />
              <base-input :type="'text'"
                          :placeholder="'Address'"
                          :required="false" />

            </div>
          </div>
        </div>
      </template>
    </modal1>
</template>

<script>
import Modal1 from "../modal/Modal1.vue"
import BaseButton from "../buttons/BaseButton.vue"
import BaseInput from "../../components/inputs/BaseInput.vue"

export default {
  name: "UpdateAccount",
  components:{
    Modal1,
    BaseButton,
    BaseInput
  },
  data(){
    return{
      isUpdateLimit:false,
      isProfile:false
    }
  },
  methods:{
    close(){
      this.isUpdateLimit = !this.isUpdateLimit
    },
    closeProfile(){
      this.isProfile = !this.isProfile
    }
  }
}
</script>

<style scoped>
.top-profile{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.save-cancel{
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  /* identical to box height */


  color: #FF6634;
}
.update-profile{
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  /* identical to box height */


  color: #3A3837;
}
.profile-form-area{
  margin-bottom: 44px;
  /*border: solid;*/
  display: block;
}
.label{
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */
  color: #000000;
  /*border: solid;*/

}
.daily-transaction-span{
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 6px;

  color: rgba(0, 0, 0, 0.7);

}
.update-limit-input{
  width: 100%;
  height: 50px;
  margin-bottom: 14px;

  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 10px;
  padding-left: 12px;
}
.modal-card{
  width: 671px;
  height: 368px;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 200px auto;
}

.modal-card-profile{
  width: 579px;
  height: 887px;
  background: #FFFFFF;
  border-radius: 10px;
  margin: 50px auto;
  transform-origin: 0 0;
  transform: scale(.9);
}

.modal-card-body{
  margin: 0 73px;
  /*border: solid;*/
}

.waya-select{
  width: 525px;
  height: 50px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
}

.modal-card-footer{
  margin-bottom: 26px;
}
.modal-card-header{
  display: flex;
  justify-content: end;
  padding: 32px;
  align-items: center;
}
.modal-card-header > h3{
  width: 100%;
  text-align: center;
}
.inner-nav{
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 1;
  width: 100%;
  /*border: solid;*/
  gap: 22px;
}
.amount-earn{
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  /* identical to box height */

  text-align: center;

  color: #333333
}
.referral-wrapper{
  width: 290px;
  height: 81px;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  padding: 11px;
  margin-top: 20px;
}
.referral-code{
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #666666;
}
.referral{
  display: flex;
  justify-content: space-between;
}
.wrapper-1-div{
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  /*border: solid;*/
  gap: 4px;
  margin-bottom: 24px;
}

.Maximum-daily-transaction{
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  color: #333333;
  width: 100%;
}

.update-limit{
  width: 141px;
  height: 40px;
  background: rgba(217, 217, 217, 0.5);
  border: 1px solid #858585;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
}
.wrapper{
  /*border: solid;*/
  width: 100% !important;
  background: #FFFFFF;
  border: 1px solid #F0F0F0;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  transform: scale(.95);
  padding: 35px;
}

.wrapper-1{
  display: flex;
  justify-content: space-around;
}
.settings-nav-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 315px;
  height: 52px;
  background: #FFFFFF;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
}
.settings-nav-item > div{
  margin-top: 8px;
}

.profile{
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #FDAF8E;
  border-radius: 360px;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;

  color: #4F4F4F
}

.settings-nav-item-h{
  font-size: 16px;
  line-height: 19px;

  color: #333333
}
.settings-nav-item-p{
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
  color: #666666;
}
</style>