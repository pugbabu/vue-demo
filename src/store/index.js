import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  items: [],
  currentEditComponent: '' // 当前编辑的组件类型
}
const getters = {
  items: state => state.items,
  currentEditComponent: state => state.currentEditComponent

}
const mutations = {
  setItems: (state, data) => {
    state.items = data
  },
  setCurrentEditComponent: (state, data) => {
    state.currentEditComponent = data
  }
}
const actions = {

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
