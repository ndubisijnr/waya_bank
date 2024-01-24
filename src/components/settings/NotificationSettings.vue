<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h" @click="isProfile = true">SMS alert notifications</h3>
        </div>
        <label class="switch">
          <input type="checkbox">
          <span class="slider round"></span>
        </label>
      </div>
      <div class="settings-nav-item">
        <div>
          <h3 class="settings-nav-item-h" @click="isProfile = true">Email alert notifications</h3>
        </div>
        <label class="switch">
          <input type="checkbox" disabled>
          <span class="slider round"></span>
        </label>
      </div>
    </div>
<!--    <p style="text-align: center;font-weight: 500;font-size: 18px;line-height: 20px;letter-spacing: 0.2px;color: #252733;">Advance Email Alert Notification Setting</p>-->
<!--    <div>-->
<!--      <base-table :data="data"/>-->
<!--    </div>-->
  </div>
</template>

<script>
import BaseTable from "../table/BaseTable.vue";
export default {
  name: "NotificationSettings",
  components:{
    BaseTable
  },
  data(){
    return{
      data:[
          {name:'make kent', school:'dont askme'},
          {name:'make kent', school:'dont askme'},
          {name:'make kent', school:'dont askme'},
          {name:'make kent', school:'dont askme'},
          {name:'make kent', school:'dont askme'},
          {name:'make kent', school:'dont askme'},
          {name:'make kent', school:'dont askme'},
      ]
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
}
.wrapper-inner{
  margin: 76px auto;
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
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 20px;
  border-radius: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  width: 14px;
  height: 10px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #3182CE;
}

input:focus + .slider {
  box-shadow: 0 0 1px #3182CE;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>