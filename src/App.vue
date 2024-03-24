<template>

  <div class="app">
    <!-- <h2 class="title">vue route</h2>

    <div class="naviagte">
      <RouterLink to="/home" active-class="active">首頁</RouterLink>
      <RouterLink to="/news" active-class="active">新聞</RouterLink>
      <RouterLink to="/about" active-class="active">關於</RouterLink>
    </div> -->
    <count/>
  </div>
<!-- 
  <div class="main-content">
    <RouterView></RouterView>
  </div> -->

</template>

<script lang="ts" setup name="App">
// import Home from './components/Home.vue'
// import About from './components/About.vue'
// import News from './components/News.vue'

import { RouterView , RouterLink } from 'vue-router'
import count from "@/components/Count.vue"



</script>


<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.active{
  color: yellow;
}
</style>