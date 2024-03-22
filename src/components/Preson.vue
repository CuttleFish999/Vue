<template>
    <div class="person">
        <h2>姓名:{{ dog.name }}，年齡:{{ dog.age }}</h2>
        
        <button @click="changeName">修改名子</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showInfo">显示信息</button>
    </div>

    <div>
        <h2>遊戲列表</h2>
        <ul>
            <li v-for="g in games" v-bind:key="g.id">{{g.name}}</li>
        </ul>
        <button @click="changeFirstGame">修改遊戲名First</button>
    </div>
    <hr>
    <h2>測試:{{obj.a.b.c}}</h2>
    <button @click="changeOBJ">測試</button>
</template>


<script setup lang="ts" name="Person324">
    import {reactive} from 'vue'
    let dog = reactive({name:"文生狗" , age:18})
    let games = reactive([
        {id: "01" , name: "喵"},
        {id: "02" , name: "喵2"},
        {id: "03" , name: "喵3"}
    ])

    let obj = reactive({
        a:{
            b:{
                c:666
            }
        }
    })

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

    function changeFirstGame(){
        games[0].name = "貓貓貓"
    }

    function changeOBJ(){
        obj.a.b.c = 999
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

li{
    font-size: 2em;
}
</style>