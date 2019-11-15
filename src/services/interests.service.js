import apiService from './api.service'

export default {
  update: (params) => apiService.put('/interests', params),

  getMyInterests: () => apiService.get('/interests')
}
