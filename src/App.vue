<template>
  <Person a="ha" :list="personList"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Preson.vue'
  import {reactive} from 'vue'
  import {type Persons} from '@/types'

  let personList = reactive<Persons>([
    {id:'1' , name : "一" , age:18},
    {id:'2' , name : "二" , age:19},
    {id:'3' , name : "三" , age:20}
  ])

  



</script>


<style>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>