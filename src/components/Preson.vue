<template>
    <div class="person">
        <h2>sum:{{ sum }}</h2>
        <button @click="changeSum">sum++</button>

    </div>
</template>



<script setup lang="ts" name="Person324">
import { ref, watch } from 'vue'

let sum = ref(0)

function changeSum() {
    sum.value++
}

watch(sum, (newValue, oldValue) => {
    console.log('sum is change',newValue, oldValue)
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
