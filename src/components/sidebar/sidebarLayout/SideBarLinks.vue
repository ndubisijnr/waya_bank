<template>
  <side-bar>
    <template v-slot:main-nav>
      <div class="main">
        <a :class="{'active' : active === i.path || active.includes(i.path)}" v-for="(i, index) in props.sideBarMainItems" :key="index" class="nav-links" :href="i.path">
          <div class="nav-links-inner">
            <span class="icon"><img :src="active === i.path || active.includes(i.path) ? i.activeIcon : i.icon" class="link-icon"/></span>
            <span :class="active === i.path || active.includes(i.path) ? 'active-link' : 'link' ">{{i.name}}</span>
          </div>
        </a>
      </div>
    </template>

    <template v-slot:footer-nav>
      <div class="footer">
        <a v-for="(i, index) in props.sideBarFooterItems" :key="index" class="nav-links" :href="i.path">
          <div class="nav-links-inner">
            <span class="icon"><img :src="i.icon" class="link-icon"/></span>
            <span class="link">{{i.name}}</span>
          </div>
        </a>
      </div>
    </template>

  </side-bar>



</template>

<script setup>
import SideBar from "./SideBar.vue"
import {computed} from "vue";
import router from "../../../router";

const props = defineProps({
  sideBarMainItems:Array,
  sideBarFooterItems:Array
})

const toRoute = (path) => {
  router.push({path:path})
}

const active = computed(() => {
  return router?.currentRoute?.value.fullPath
})

</script>

<style scoped>
.main{
  height: auto;
  /*border: solid;*/

}
.nav-links-inner{
  transform: scale(.9);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
}
.nav-links{
  /*background-color: #FFF0EB;*/
  width: auto;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 26px;
  cursor: pointer;
}

.nav-links:hover{
  background-color: #FFF0EB;
}

a{
  text-decoration: none;

}

.active{
  background-color: #FFF0EB;
  transition: .3s linear;
}

.active-link{
  color: #FF4400;
  width: 85%;
  height: auto;
  font-size: 18px;
  font-weight: 400;
}

.icon{
  width: 25%;
  height: 25%;
  text-align: end;

}

.link-icon{
  max-width: 20px;
  max-height: 20px;
}

.link{
  font-size: 16px;
  font-weight: 400;
  /*border: solid;*/
  width: 85%;
  height: auto;
  color: #858585;
  transition: .05s linear;
}

.footer{
  width: 100%;
  border-top: 1px solid #E2E0E0;
  margin: 50px auto 14px auto;
  /*border: solid;*/
}
</style>