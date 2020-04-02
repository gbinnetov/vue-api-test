<template>
  <div class="container">
    <h1 class="text-center mt-5 text-info">Vue.js ile Api Test</h1>
  <transition name="page" mode="out-in">
      <router-view></router-view>      
  </transition>
  </div>
</template>


<script>

export default {
  created() {
    this.$store.dispatch('initApp')
  },
}
</script>


<style>
 html {
   height: 100% !important;
 }
 body {
   background-image: linear-gradient(to right top , #051937, #002436, #022b2d, #203028, #32342d);
 }
 .page-enter, .page-leave-active{
   opacity: 0;
   transform: translate(50px);

 }
 .page-enter-active, .page-leave{
    transition: all .5s; 
  }

 
</style>