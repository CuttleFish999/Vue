<template>
    <div class="person">
        ???
    </div>
</template>



<script setup lang="ts" name="Person">
    import {type  PersonInter} from '@/types'
    
    let person:PersonInter = {id:'123' , name:'222',age:20}
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
