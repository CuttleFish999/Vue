<template>
  <Person/>
</template>

<script lang="ts">
    import Person from './components/Preson.vue'
    export default{
      name: 'App',
      components:{Person}
    }

</script>


<style>

  .app{
    background-color: #ddd;
    box-shadow:  0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>