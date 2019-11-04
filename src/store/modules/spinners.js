export const state = {
  processingForm: false
}

export const mutations = {
  ENABLE_PROCESSING_FORM: state => (state.processingForm = true),

  DISABLE_PROCESSING_FORM: state => (state.processingForm = false)
}
