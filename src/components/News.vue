<template>
    <div class="news">
        <ul>
            <li v-for="news in newList" :key="news.id">
                <!-- <RouterLink :to="`/News/Detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink> -->
                <!-- <RouterLink :to="`/News/Detail/${news.id}/${news.title}/${news.content}`">{{news.title}}</RouterLink> -->
                <RouterLink :to="{
                    name:'meow',
                    params:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }
                }">
                {{ news.title }}
                </RouterLink>
            </li>
        </ul>
    </div>

    <div class="news-container">
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue'

const newList = reactive([
    { id: "1", title: "abc", content: "123" },
    { id: "2", title: "abcd", content: "1233" },
    { id: "3", title: "abce", content: "1234" },
    { id: "4", title: "abcf", content: "1232" }
])

</script>


<style></style>