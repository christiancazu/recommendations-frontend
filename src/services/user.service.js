import apiService from './api.service'

export default {
  getUsers: () => apiService.get('/users'),

  getRecommendations: () => apiService.get('/users/recommendations'),

  updateSkills: params => apiService.put('/users/skills', params)
}
