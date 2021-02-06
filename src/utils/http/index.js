import axiosQuest from "axios"
const headers={
    'Content-type': 'application/json;charset=UTF-8',
    refer: 'https://y.qq.com/',
    host:'c.y.qq.com',
    origin: 'https://y.qq.com',
};
Window.routeCancel={
    token: null,
    Cancel: null,
}
//设置请求拦截器 在每次请求时配置当前的token
axiosQuest.interceptors.request.use(config=>{
    if(config.cancelToken === undefined){
        config.cancelToken = Window.routeCancel.token
    }
    return config;
}, err=>{
    return Promise.reject(err)
})
const CancelToken = axiosQuest.CancelToken
const source = CancelToken.source()
const isUnAuth = (data)=>{
    if(data.response&&data.response.status===302&&data.response.headers.contextpath.includes('login')){
        Window.routeCancel.Cancel&& Window.routeCancel.Cancel();
        top.window.location.href = data.response.he.contextpath
    }
}
class https {
   static get(url,params,wholeUrl,config=undefined){
       return new Promise((resolve, reject)=>{
           axiosQuest({
               url:wholeUrl||url,
               method: 'GET',
               params,
               headers,
               // withCredentials:true,
               CancelToken: source.token,
               ...config
           }).then(res=>{
               resolve(res)
           }).catch(err=>{
               if(err.message && err.message !=='routeCancel'){
                   isUnAuth(err)
                   reject(err)
               }
           })
       })
   }
    static post(url,params,wholeUrl,config=undefined){
        return new Promise((resolve, reject)=>{
            axiosQuest({
                url:wholeUrl||url,
                method: 'POST',
                params,
                headers,
                // withCredentials:true,
                CancelToken: source.token,
                ...config
            }).then(res=>{
                resolve(res)
            }).catch(err=>{
                if(err.message && err.message !=='routeCancel'){
                    isUnAuth(err)
                    reject(err)
                }
            })
        })
    }
}
export default https