<template>
<div class="settings-wrapper">
  <div class="settings-wrapper-inner">
    <div class="settings-nav">
      <h4 class="settings-header">Settings</h4>
      <div @click="isActive = 'updateProfile'" :class="{'active':isActive == 'updateProfile'}" class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h">Update Account</h3>
          <p class="settings-nav-item-p">Profile edit, Change Password, etc.</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />
      </div>
      <div @click="isActive = 'notification'" :class="{'active':isActive == 'notification'}" class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h">Notification settings</h3>
          <p class="settings-nav-item-p">Email, SMS, Push notification.</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />
      </div>
      <div @click="isActive = 'payment_settings'" :class="{'active':isActive == 'payment_settings'}" class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h">Payment settings</h3>
          <p class="settings-nav-item-p">Card, Bank, Credentials</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />
      </div>
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h">Team Members</h3>
          <p class="settings-nav-item-p">Roles & Access Management</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />
      </div>
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h">API Documentation</h3>
          <p class="settings-nav-item-p">View your API keys and  Webhooks keys</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />
      </div>
      <div class="settings-nav-item">
      <div>
        <h3 class="settings-nav-item-h">Invite a friend</h3>
        <p class="settings-nav-item-p">Share Wayabank to your friends & family.</p>
      </div>
      <img src="../../assets/icons/Settings/Rarrow.svg" />
    </div>
      <div class="settings-nav-item">
      <div>
        <h3 class="settings-nav-item-h">Transparency</h3>
        <p class="settings-nav-item-p">Terms & Condition, privacy policy, about us!</p>
      </div>
      <img src="../../assets/icons/Settings/Rarrow.svg" />
    </div>
      <div class="settings-nav-item">
      <div>
        <h3 class="settings-nav-item-h">Login Information</h3>
        <p class="settings-nav-item-p">Location, device, time of login.</p>
      </div>
      <img src="../../assets/icons/Settings/Rarrow.svg" />
    </div>
    </div>
    <div>
      <update-account v-if="isActive == 'updateProfile'" />
      <notification-settings v-if="isActive == 'notification'" />
      <payment-settings v-if="isActive == 'payment_settings'" @manage-kyc="manageKYC"/>
      <upgrade-k-y-c v-if="isActive == 'upgrade-kyc'" />
    </div>
  </div>

</div>
</template>

<script>
import UpdateAccount from "./UpdateAccount.vue";
import NotificationSettings from "./NotificationSettings.vue";
import PaymentSettings from "./PaymentSettings.vue";
import UpgradeKYC from "./UpgradeKYC.vue";
export default {
  name: "Layout",
  components:{UpdateAccount,NotificationSettings,PaymentSettings,UpgradeKYC},
  data(){
    return{
      isActive:'updateProfile'
    }
  },
  methods:{
    manageKYC(value){
      this.isActive = value
    }
  }
}
</script>

<style scoped>
.settings-wrapper-inner{
  /*margin: 33px auto;*/
  /*border: solid;*/
  display: flex;
}
.active{
  background: #FFEFE9 !important;
}
.settings-header{
  margin-bottom: 39px;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  letter-spacing: 0.2px;

  /* grayscale / black */

  color: #252733;
}
.settings-nav{
  width: 344px;
  height: 100vh;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  padding: 15px;


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