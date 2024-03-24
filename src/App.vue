<template>

  <div class="app">
    <h2 class="title">vue route</h2>

    <div class="naviagte">
      <RouterLink to="/home" class="active">首頁</RouterLink>
      <RouterLink to="/news">新聞</RouterLink>
      <RouterLink to="/about">關於</RouterLink>
    </div>
  </div>

  <div class="main-content">
    <RouterView></RouterView>
  </div>

</template>

<script lang="ts" setup name="App">
// import Home from './components/Home.vue'
// import About from './components/About.vue'
// import News from './components/News.vue'

import { RouterView , RouterLink } from 'vue-router'



</script>


<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>