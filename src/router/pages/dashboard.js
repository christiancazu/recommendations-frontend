import auth from '../middlewares/auth'

export default {
  path: '/dashboard',
  name: 'dashboard',
  beforeEnter: auth,
  component: () => import('pages/dashboard/Index.vue')
}
