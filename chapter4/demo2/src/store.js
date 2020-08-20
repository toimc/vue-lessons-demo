import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moment from 'moment'

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addItem (state, value) {
      value.time = moment(value.time).format('YYYY-MM-DD HH:mm')
      state.lists.push(value)
    },
    removeItem (state, value) {
      state.lists.splice(value, 1)
    }
  },
  actions: {

  }
})
