<template>
    <div class="person">
        <label for="">姓:<input type="text" v-model="firstName"></label>
        <label for="">名:<input type="text" v-model="lastName"></label>
        <h1>全名:{{ fullName }}</h1>
        <button @click="changeAge">修改年齡</button>
    </div>
</template>



<script setup lang="ts" name="Person324">
import { ref, computed } from 'vue'

let firstName = ref('娘')
let lastName = ref('文生')

let fullName = computed(() => {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
})

function changeName() {
    name.value += '~'
}

function changeAge() {
    age.value++
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