import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import News from '@/components/News.vue'
import Detail from '@/components/Detail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },

        {
            path: '/about',
            component: About
        },
        {
            path: '/news',
            component: News,
            children: [
                {
                    name:"meow",
                    path: 'detail/:id/:title/:content',
                    component: Detail,
                    // props:true
                    props(){
                        return{
                            id:100,
                            title:200,
                            content:300
                        }
                    }
                }
            ]
        },
    ]
})

export default router