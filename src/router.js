import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router(
    {
        routes:[
            {
                path:'/',
               redirect: '/tuijian'
            },
            {
                path:'/tuijian',
                name:'tuijian',
                component:() => import('./views/tuijian/tuijian.vue')
            },
            {
                path:'/singers',
                name:'singers',
                component:() => import('./views/singers/singer.vue')
            },
        ]
    }
)
export default router