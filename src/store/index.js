import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://localhost:8080'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sort: '全部订单',
    data: []
  },
  getters: {
    completedItems: state => {
      if (state.sort === '全部订单') {
        console.log(state.data)
        return state.data
      } else {
        console.log(state.data.filter(item => item.state === state.sort))
        return state.data.filter(item => item.state === state.sort)
      }
    }
  },
  mutations: {
    alter (state, payload) {
      state.sort = payload
    },
    increment (state, val) {
      console.log(val)
      state.data = val
    }
  },
  actions: {
    async request (context) {
      const { data: { data } } = await axios.get('/json/list01.json')
      console.log(data)
      console.log(context)
      context.commit('increment', data)
    }
  },
  modules: {
  }
})
