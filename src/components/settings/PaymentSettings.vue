<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h" @click="isProfile = true">Manage Card</h3>
          <p class="settings-nav-item-p">Add your Debit card.</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />

      </div>
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h" @click="isProfile = true">Manage Accounts</h3>
          <p class="settings-nav-item-p">Create multiple accounts</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />

      </div>
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h" @click="manageKyc">Manage KYC</h3>
          <p class="settings-nav-item-p">Update Tier levels</p>
        </div>
        <img src="../../assets/icons/Settings/Rarrow.svg" />

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentSettings",
  methods:{
    manageKyc(){
      this.$emit('manage-kyc', 'upgrade-kyc')
    }
  }
}
</script>

<style scoped>
.settings-nav-item-h{
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #333333;

}
.wrapper{
  width: 700px;
  background: #FFFFFF;
  height: 100vh;
  /*border: 1px solid #F0F0F0;*/
  /*box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);*/
  transform: scale(.95);
  padding: 35px;
  /*border: solid;*/
}
.wrapper-inner{
  /*margin: 76px auto;*/
  /*border: solid;*/
  width: 100%;
}
.settings-nav-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  background: #FFFFFF;
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
}
.settings-nav-item > div{
  margin-top: 8px;
  width: 100%;
}

.settings-nav-item-p{
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
  color: #666666;
}

</style>