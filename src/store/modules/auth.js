import authService from 'src/services/auth.service'
import jwtService from 'src/services/jwt.service'

export const state = {
  user: null,
  token: jwtService.getToken(),
  userStateInToolbar: false
}

export const getters = {
  checkUser: state => state.user,

  isAdmin: state => state.user.roles.find(u => u === 'admin'),

  isTutor: state => state.user.roles.find(u => u === 'tutor')
}

export const mutations = {
  SET_USER: (state, payload) => (state.user = payload),

  SET_USER_SUCCESS: (state, payload) => (state.user = payload),

  SAVE_TOKEN: (state, payload) => {
    state.token = payload.token
    jwtService.saveToken(payload.token, payload.remember)
  },

  PURGE_AUTH: state => {
    state.user = null
    state.token = null
    jwtService.destroyToken()
  },

  SET_USER_STATE_IN_TOOLBAR: state => (state.userStateInToolbar = true)
}

export const actions = {
  signIn: async ({ commit }, form) => {
    const { data } = await authService.signIn(form)

    commit('SAVE_TOKEN', { token: data.token })
    commit('SET_USER', data.user)
  },

  signUp: async ({}, form) => {
    await authService.signUp(form)
  },

  fetchUser: async ({ commit }) => {
    try {
      const { data } = await authService.getUser()
      commit('SET_USER_SUCCESS', data)
    } catch (error) {
      commit('PURGE_AUTH')
    }
  },

  logout: ({ commit }) => {
    // await authService.logout()
    commit('PURGE_AUTH')
  }
}
