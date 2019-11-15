import interestsService from 'src/services/interests.service'

export const state = {
  interests: {}
}

export const actions = {
  getMyInterests: async ({ commit }) => {
    const { data } = await interestsService.getMyInterests()
    commit('SET_INTERESTS', data.interests)
  },

  update: async ({}, form) => {
    await interestsService.update(form)
  }
}

export const mutations = {
  SET_INTERESTS: (state, payload) => state.interests = payload
}