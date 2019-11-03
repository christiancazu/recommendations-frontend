export const state = {
  dialogSignIn: false,
  dialogSignUp: false,
  mainDialog: 'dialogSignIn'
}

export const mutations = {
  OPEN_DIALOG: (state, payload) => (state[payload] = true),

  CLOSE_DIALOG: (state, payload) => (state[payload] = false),

  SET_DYNAMIC_MAIN_DIALOG: (state, payload) => (state.mainDialog = payload)
}
