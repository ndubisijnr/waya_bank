<script setup>

</script>

<template>
  <div class="auth-layout">
    <div class="auth-layout-card">
      <slot name="auth-card"/>
    </div>
  </div>
</template>


<style scoped>
.auth-layout{
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url("../../assets/background_images/img1.png");
  background-position: top;
  background-size: cover;
  object-fit: cover;
}

.auth-layout-card{
  width: 70%;
  height: auto;
  margin: auto auto;
  /*border: solid;*/
}

/* xs breakpoint */
@media (max-width: 800px) {
  .auth-layout-card{
    width: 100%;
    height: auto;
    padding: 1rem;
    margin: 10px auto;
  }

}

</style>