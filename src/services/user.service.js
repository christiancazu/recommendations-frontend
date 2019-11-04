import apiService from './api.service'

export default {
  update: () => apiService.put('/users')
}
