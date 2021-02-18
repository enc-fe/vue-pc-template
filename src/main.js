import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Bus from '@/utils/bus'
import ElementUI from 'element-ui'
import './element-variables/index.scss'

Vue.config.productionTip = false

Vue.use(Bus)
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
