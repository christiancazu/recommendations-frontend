/* eslint-disable no-unused-vars */

import store from 'src/store'

export default async (to, from, next) => {
  if (!store.getters['auth/checkUser']) {
    next({ name: 'home' })
  } else {
    next()
  }
}
