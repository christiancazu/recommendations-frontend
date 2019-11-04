import axios from 'axios'

import { Notify } from 'quasar'

const axiosInstance = axios.create({
  baseURL: process.env.API_URL
})

export default async ({ app, Vue /*store, router*/ }) => {
  Vue.prototype.$axios = axiosInstance

  // request interceptor
  axiosInstance.interceptors.request.use(config => {
    // send token in header request
    // const token = store.state.auth.token
    // if (token) {
    //   config.headers.common['Authorization'] = `Bearer ${token}`
    // }

    // store.commit('errors/CLEAN_ERRORS')
    return config
  })

  // response interceptor
  axiosInstance.interceptors.response.use(
    // handle response success
    response => response,
    // handle response error
    error => {
      const { status } = error.response

      let message = 'default'

      switch (status) {
      // server error
      case 500:
        break
        // session expired
      case 401:
        // if (store.getters['checkUser']) {
        //   message = 'sessionExpired'

        //   store.commit('auth/LOGOUT')
        //   router.push({ name: 'home' })
        // }
        break
        // not found
      case 404:
        message = error.response.data.message || 'notExists'

        // store.commit('auth/LOGOUT')
        // router.push({ name: 'home' })
        break
        // data invalid (Unprocessable Entity)
      case 422:
        message = 'invalidData'

        // store.commit('errors/SET_ERRORS', error.response.data.errors)
        break
        // too many request
      case 429:
        message = 'tooManyRequest'

        // store.commit('errors/SET_ERRORS', error.response.data.errors)
        break
        // #TODO: default error response
      default:
        break
      }

      Notify.create({
        message: app.i18n.t(`error.${message}`),
        color: 'negative',
        icon: 'error'
      })

      return Promise.reject(error)
    }
  )
}

export { axiosInstance }
