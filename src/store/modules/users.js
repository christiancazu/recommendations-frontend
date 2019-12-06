import userService from 'src/services/user.service'

export const state = {
  recommendedUsersIds: [],
  users: [],
  recommendedUsers: [],
  criteriaSkills: ''
}

export const getters = {

  users: state => {
    const criteriaSkillsLowerCase = state.criteriaSkills.toLowerCase()

    const usersFilters = state.users.filter(user => {
      for (let index = 0; index < user.skills.length; index++) {
        if (user.skills[index].label.toLowerCase().includes(criteriaSkillsLowerCase))
          return true
      }
    })
    return usersFilters
  }
}

export const actions = {
  getUsers: async ({ commit }) => {
    const { data } = await userService.getUsers()
    commit('SET_USERS', data)
  },

  getRecommendations: async ({ commit }) => {
    const { data } = await userService.getRecommendations()
    commit('SET_RECOMMENDED_USERS', data)
  },

  updateSkills: async ({}, form) => {
    await userService.updateSkills(form)
  }
}

export const mutations = {
  SET_USERS: (state, payload) => {
    state.users = payload.map(user => ({
      ...user,
      rating: Math.floor(Math.random() * (5 - 0 + 1) + 0),
      cycle: Math.floor(Math.random() * (10 - 1 + 1) + 1),
      views: Math.floor(Math.random() * (100 - 0 + 1) + 0),
      comments: Math.floor(Math.random() * (100 - 0 + 1) + 0),
      hasView: Math.random() >= 0.5,
      skills: user.skills.filter(skill => skill.value)
      // rating: Math.floor(Math.random()*(10-1+1)+1)
    }))
  },

  SET_RECOMMENDED_USERS: (state, payload) => (state.recommendedUsersIds = payload),

  INCREMENT_VIEW: (state, payload) => {
    const user = state.users.find(user => user.id === payload)
    user.views++
    user.hasView = !user.hasView
  },

  DECREMENT_VIEW: (state, payload) => {
    const user = state.users.find(user => user.id === payload)
    user.views--
    user.hasView = !user.hasView
  },

  SET_CRITERIA_SKILLS: (state, payload) => {
    state.criteriaSkills = payload
  }
}