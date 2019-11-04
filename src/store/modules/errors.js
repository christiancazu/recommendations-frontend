export const state = {
  formErrors: {}
}

export const mutations = {
  SET_ERRORS: (state, errors) => (state.formErrors = errors),

  CLEAN_ERRORS: state => (state.formErrors = {})
}
