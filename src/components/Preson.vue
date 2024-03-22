<template>
    <div class="person">
        <h2>姓名:{{ dog.name }}，年齡:{{ dog.age }}</h2>
        
        <button @click="changeName">修改名子</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showInfo">显示信息</button>
    </div>
</template>


<script setup lang="ts" name="Person324">
    import {reactive} from 'vue'
    let dog = reactive({name:"文生狗" , age:18})

    function changeName(){
            if(dog.name === "文生狗"){
                dog.name = "Dog"
            }else{
                dog.name = "文生狗"
            }
            
        }

    function changeAge(){
        dog.age++
    }

    // function showTel(){
    //     alert(tel)
    // }
</script>


<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button{
    margin: 0 1em
}
</style>