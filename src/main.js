import '../public/public.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import * as echarts from 'echarts'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(Antd)
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
