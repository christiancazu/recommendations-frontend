import posts from 'src/data/posts'

export const state = {
  posts,
  postsFilters: posts
}
export const getters = {
  posts: state => filter => state.posts.filter(p => p.type === filter)
}

export const mutations = {
  FILTER_DATA: (state, payload) => {
    const texttoFindLowercase = payload.toLowerCase()
    state.postsFilters = state.posts.filter(pf => {
      for (let index = 0; index < pf.skills.length; index++) {
        if (pf.skills[index].toLowerCase().includes(texttoFindLowercase)) {
          return true
        }
      }
    })
  },
  ADD_NEW_POST: ({}, payload) => {
    state.posts.push(payload)
    state.postsFilters = state.posts
  }
}
