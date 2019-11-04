/* eslint-disable no-unused-vars */
import store from 'src/store'

export default async (to, from, next) => {
  if (!store.getters['auth/checkUser'] && store.state.auth.token) {
    try {
      await store.dispatch('auth/fetchUser')
    } catch (e) {
      store.commit('auth/PURGE_AUTH')
      next({ name: 'home' })
    }
  }
  next()
}
