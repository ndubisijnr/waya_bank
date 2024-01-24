<template>
  <div class="verify-form-card-div">
    <v-card class="card">
      <!-- card title -->
      <slot name="card-title"></slot>
      <!-- end card title -->

      <!-- card sub-title -->
      <slot name="card-subtitle"></slot>
      <!-- end card sub-title -->

      <!-- form area -->
      <div class="form-area">
        <slot name="form-area"></slot>
      </div>
      <!-- end form area -->

      <!-- form footer-link -->
      <slot name="footer-link"></slot>
      <!-- form footer-link -->

    </v-card>
  </div>
</template>

<script setup>

</script>

<style scoped>
.verify-form-card-div{
  width: 100%;
  height: 90vh;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(.8);
  background-color: #FFFFFF;

}
.card{
  width: 426px;
  height:  426px;
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
</style>