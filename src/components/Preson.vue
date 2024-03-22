<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{ age }}</h2>
        <button @click="changeName">修改名子</button>
        <button @click="changeAge">修改年齡</button>
        <button @click="showTel">查看電話</button>

    </div>
</template>


<script setup lang="ts" name="Person324">
    import {ref} from 'vue'
    let name = ref('文生狗')
    let age = ref(18)
    let tel = '1388888'
    function changeName(){
            if(name.value === "文生狗"){
                name.value = "Dog"
            }else{
                name.value = "文生狗"
            }
            
        }

        function changeAge(){
            age.value ++
        }
    function showTel(){
            alert(tel)
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