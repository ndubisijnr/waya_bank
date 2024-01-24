<template>
  <div class="bills-layout-wrapper">
    <div class="bills-layout-wrapper-card">
      <div class="card-head">
        <slot name="card-head"></slot>
      </div>
      <div class="card-body">
        <slot name="card-body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillsPaymentCard"
}
</script>

<style scoped>
.bills-layout-wrapper{
  height: 100vh;
  overflow-y: scroll;
  width: 100%;
}
.bills-layout-wrapper-card{
  margin: 100px auto;
  width: 590px;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 10px 4px rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  transform: scale(.9);
  background-color: #FFFFFF;
}
.card-head{
  height: 108px;
  background: #F1F7FA;
  border: 1px solid #E0E0E0;
  border-radius: 14px 14px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>