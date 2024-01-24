<template>
  <div class="success-modal" :style="isBlur ? {backdropFilter:'blur(2px)'} : null">
    <div class="success-modal-inner">
      <div class="success-modal-body">
        <img src="../../assets/icons/successIcon2.svg" width="100"/>
        <h3 class="success-modal-body-h">Successful</h3>
        <p class="success-modal-body-p">Your transaction has been done successfully</p>
      </div>
      <div class="success-modal-footer">
        <p class="success-modal-footer-p" @click="close">Go back to Home</p>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name:"SuccessModal",
  props:['isBlur'],
  data(){
    return{

    }
  },
  methods:{
    close(){
      console.log('ok')
      this.$emit('closeSuccess', false)
    }
  }
}



</script>

<style scoped>
.success-modal-inner{
  background-color: white;
  margin: 100px auto;
  width: 590px;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.06);
  border: 1px solid #E0E0E0;
  border-radius: 14px;

}
.success-modal{
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.success-modal-body{
  display: flex;
  flex-direction: column;
  transform: scale(.9);
  justify-content: center;
  align-items: center;
  gap: 21px;
  padding: 47px;
}

.success-modal-footer{
  background-color: #F2F2F2;
  padding: 27px;
  text-align: center;
  width: 100%;
  border-radius: 14px;

}

.success-modal-footer-p{
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #FF6634
}
</style>