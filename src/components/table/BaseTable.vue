<template>
  <div class="table">
      <div class="head">
        <p>Dr/Cr</p>
        <p>Amount</p>
        <p>Service</p>
        <p>C.Account Number</p>
        <p>C.Account Name</p>
        <p>Date</p>
        <p>Action</p>
      </div>
      <div>
        <div class="body">
          <p>dr</p>
          <p>NGN100,000</p>
          <p>bills payment</p>
          <p>000001010</p>
          <p>tunde mike</p>
          <p>9/10/23</p>
          <p><img src="../../assets/icons/Settings/edit.svg" /> </p>
        </div>
        <div class="body">
          <p>dr</p>
          <p>NGN100,000</p>
          <p>bills payment</p>
          <p>000001010</p>
          <p>tunde mike</p>
          <p>9/10/23</p>
          <p><img src="../../assets/icons/Settings/edit.svg" /> </p>

        </div>
        <div class="body">
          <p>dr</p>
          <p>NGN100,000</p>
          <p>bills payment</p>
          <p>000001010</p>
          <p>tunde mike</p>
          <p>9/10/23</p>
          <p><img src="../../assets/icons/Settings/edit.svg" /> </p>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  props:['fields', 'data']
}
</script>

<style scoped>
.table{
  width: 100%;
}
.head{
  width: 100%;
  height: 43px;
  background: rgba(231, 71, 44, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 30px auto;
}

.head p{
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  width: 100px;
  color: #FF6634;
  text-align: center;

}

.body{
  width: 100%;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom:1px solid #D9D5EC;
  margin-bottom: 21px;
  cursor: pointer;
  /*border: solid;*/
}

.body > p{
  /*border: solid;*/
  width: 100px;
  text-align: center;
}
</style>