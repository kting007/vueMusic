import auth from './v-auth'

const directives = {
    auth
}
//这种写法可以批量组成指令
export default {
    install(Vue){
        Object.keys(directives).forEach((key)=>{
            Vue.directive(key,directives[key])
        })
    }
}