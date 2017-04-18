import Vue from 'vue'
import Router from 'vue-router'
import Editor from '@/components/Editor.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
