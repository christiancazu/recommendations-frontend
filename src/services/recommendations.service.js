import apiService from './api.service'

export default {
  getRecommendations: () => apiService.get('/recommendations')
}
