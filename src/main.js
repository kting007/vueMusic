import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Directives from './directives'
import 'assets/css/variable.less'
import https from './utils/http/index'

import HelloWorld from './components/HelloWorld.vue'
Vue.config.productionTip = false
Vue.use(Element,{
  transfer: false
})
Vue.use(Antd);
Vue.use(VueLazyload);
Vue.use(Directives);
Vue.prototype.bus= new Vue()
Vue.prototype.http = https;
Vue.component( 'HelloWorld',HelloWorld)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
