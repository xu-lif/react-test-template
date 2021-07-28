import NoFoundPage from '@/containers/NoFoundPage'

export default {
  routes: [
    {
      path: '*',
      component: NoFoundPage,
    }
  ]
}