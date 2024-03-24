<template>
    <div class="news">
        <ul>
            <li>標號:{{route.query.id}}</li>
            <li>標題:{{route.query.title}}</li>
            <li>內容:{{route.query.content}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="News">
    import {useRoute} from 'vue-router'

    const route = useRoute()
    console.log('@',route)
</script>


<style>

</style>