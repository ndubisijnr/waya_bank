<template>
<div class="sidebar-wrapper">

  <div class="sidebar-logo">
      <img :src="sidebarLogo" class="logo" />
    </div>

  <div class="navs">
    <slot name="main-nav"></slot>
    <slot name="footer-nav"></slot>
  </div>

  </div>

</template>

<script setup>
import sidebarLogo from "@/components/sidebar/sidebarLayout/assets/sidebar_logo.png"
</script>

<style scoped>
.sidebar-wrapper{
  width:329px;
  background-color: #FFFFFF;
  height: 100%;
  border: 1px solid #E2E0E0;
  position: fixed;
  overflow-y: scroll;
}

::-webkit-scrollbar{
  display: none;
}

::-webkit-scrollbar-track{
  visibility: hidden;
}

.navs{
  /*border: solid;*/
}



.logo{
  width: 160px;
  margin: 27px;
}

.sidebar-logo{
  /*width: 100%;*/
  /*border: solid;*/

}
</style>