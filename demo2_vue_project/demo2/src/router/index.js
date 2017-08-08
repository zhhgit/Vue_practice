import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Item from '@/components/Item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
  ]
})
