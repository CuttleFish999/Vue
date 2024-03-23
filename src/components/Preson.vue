<template>
    <div class="person">
        <h2>temp:{{ temp }}</h2>
        <h2>sum:{{ sum }}</h2>
        <button @click="changeTemp">sum++</button>
        <button @click="changeSum">sum++</button>
    </div>
</template>



<script setup lang="ts" name="Person">
import { ref, watch , watchEffect } from 'vue'

let temp = ref(10)
let sum = ref(0)

function changeSum() {
    sum.value++
}

function changeTemp(){
    temp.value += 10
}

// watch([temp , sum],(value)=>{
//     let [newTemp , newSum] = value
//     console.log(newTemp,newSum)
//     if(newTemp >= 60 || newSum >= 80){
//         console.log("get")
//     }
// })

watchEffect(()=>{
    if(temp.value >= 60 || sum.value >= 3){
        console.log("get")
    }
})


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
