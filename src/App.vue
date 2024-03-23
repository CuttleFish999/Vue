<template>
  <h2 ref="title2">hi</h2>
  <button @click="showLog">hi</button>
  <Person />
</template>

<script lang="ts" setup name="App">
import Person from './components/Preson.vue'
import {ref} from 'vue'


let title2 = ref()


function showLog() {
  console.log(title2.value)
}
</script>


<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>