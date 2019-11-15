import auth from '../middlewares/auth'

export default {
  path: '/dashboard',
  beforeEnter: auth,
  component: () => import('layouts/DashboardPageLayout'),
  children: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('pages/dashboard/Index')
    },
    {
      path: '/dashboard/interests',
      name: 'interests',
      component: () => import('pages/interests/Index')
    },
    {
      path: '/dashboard/tutorship',
      name: 'tutorship',
      component: () => import('pages/tutorship/Index')
    }
  ]
}
