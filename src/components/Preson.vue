<template>
    <div class="person">
        <h2>{{ a }}</h2>
        <ul>
            <li v-for="a in list">{{ a.id }} - {{ a.name }} - {{ a.age }}</li>
        </ul>
    </div>
</template>



<script setup lang="ts" name="Person">
    import {defineProps} from 'vue'

    let x = defineProps(['a','list'])
    console.log(x.a)
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
