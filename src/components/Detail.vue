<template>
    <div class="news">
        <ul>
            <li>標號:{{route.params.id}}</li>
            <li>標題:{{route.params.title}}</li>
            <li>內容:{{route.params.content}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="News">
    import {useRoute} from 'vue-router'

    const route = useRoute()
    console.log(route)
</script>


<style>

</style>