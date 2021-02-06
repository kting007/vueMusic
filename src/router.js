import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router(
    {
        routes:[
            {
                path:'/alarm',
                name:'alarm',
                component:() => import('./views/alarm.vue')
            },
        ]
    }
)
export default router