<template>
    <div class="person">
       <h1 ref="title2">台北</h1>
       <h1 id="title2">桃園</h1>

       <button @click="showLog">輸出</button>
    </div>
</template>



<script setup lang="ts" name="Person">
import { ref, watch , watchEffect } from 'vue'

let title2 = ref()


function showLog(){
    console.log(title2.value)
}


</script>


<style scoped>
input,
label {
    font-size: 2em;
}

.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 1em
}

li {
    font-size: 2em;
}
</style>
