import { Cookies } from 'quasar'

export default {
  getToken: () => Cookies.get('token'),

  saveToken: (token, remember) => Cookies.set('token', token, { expires: remember ? 365 : null }),

  destroyToken: () => Cookies.remove('token')
}
