<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{ age }}</h2>
        <button @click="changeName">修改名子</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel">查看電話</button>

    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    setup(){

        //  Data

        let name = '文生狗'
        let age = 18
        let tel = '1388888'

        // function

        function changeName(){
            name = "ahzng-san"
        }

        function changeAge(){
            age ++
        }

        function showTel(){
            alert(tel)
        }


        return {name , age , tel , changeName , changeAge , showTel}  
        
    }
    
}
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