<template>
    <div class="news">
        <ul class="news-list">
            <li>標號:{{id}}</li>
            <li>標題:{{title}}</li>
            <li>內容:{{content}}</li>
            
        </ul>
    </div>
</template>

<script setup lang="ts" name="News">
   defineProps(['id', 'title' , 'content'])
</script>


<style>

</style>