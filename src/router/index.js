import { createRouter, createWebHistory } from 'vue-router'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'
import DefaultLayout from '../views/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'list',
          component: List
        },
        {
          path: '/:imdbID',
          name: 'detail',
          component: Detail,
          props: true
        },
      ]
    }
  ]
})

export default router
