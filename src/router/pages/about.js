import auth from '../middlewares/auth'

export default {
  path: '/about',
  name: 'about',
  beforeEnter: auth,
  component: () => import('pages/about/Index.vue')
}
