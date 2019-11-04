import apiService from './api.service'

export default {
  logout: () => apiService.post('/logout'),

  signIn: params => apiService.post('/auth/signIn', params),

  getUser: () => apiService.get(`/users/me`)
}
