import { axiosInstance } from 'src/boot/axios'

export default {
  query: (resource, params) => axiosInstance.get(resource, params),

  get: (resource, slug = '') => axiosInstance.get(`${resource}/${slug}`),

  post: (resource, params) => axiosInstance.post(`${resource}`, params),

  update: (resource, slug, params) => axiosInstance.put(`${resource}/${slug}`, params),

  put: (resource, params) => axiosInstance.put(`${resource}`, params),

  delete: resource => axiosInstance.delete(resource)
}
