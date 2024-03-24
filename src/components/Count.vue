<template>
    <div class="count">
            <h2>和:{{countStore.sum}}</h2>
            <select v-model.number="n">
            </select>
    </div>
    <button @click="add">+</button>
    <button @click="minus">-</button>
</template>


<script setup lang="ts" name="Count">
    import{ref} from 'vue'
    import{useCountStore} from '@/store/count'

    const countStore = useCountStore()

    let sum = ref(1)
    let n = ref(1)

    function add(){
        countStore.sum += n.value
        // sum.value += n.value
    }
    function minus(){
        countStore.sum -= n.value
        // sum.value -+ n.value
    }
</script>


<style>

</style>