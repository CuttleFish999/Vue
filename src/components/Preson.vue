<template>
    <div class="person">
        <h2>sum:{{ sum }}</h2>
        <button @click="add">add</button>
    </div>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" alt="" :key="index">
    <button @click="getDog">oneMoreDog</button>
</template>



<script setup lang="ts" name="Person">
    import {ref , reactive} from 'vue'
    import axios from 'axios'

    let sum = ref(0)
    let dogList = reactive([
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_1136.jpg',
        'https:\/\/images.dog.ceo\/breeds\/pembroke\/n02113023_6140.jpg'
    ])

    function add(){
        sum.value ++
    }

    async function getDog(){
        try{
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogList.push(result.data.message)
        }catch(error){
            alert(error)
        }
        
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
img{
    height: 100px;
    margin-right: 1em;
}
</style>
