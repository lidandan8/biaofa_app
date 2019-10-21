import Vue from 'vue'
import Vuex from 'vuex'
import UserInfo from './modules/userInfo'
import AccountData from './modules/accountData'
import createPersistedState from 'vuex-persistedstate' // vuex持久化方法

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user: UserInfo, // 用户信息模块
    accountData: AccountData // 个人中心数据
  }
})

export default store
