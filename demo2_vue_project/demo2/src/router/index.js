import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Page6 from '@/components/Page6'
import Page7 from '@/components/Page7'

Vue.use(Router)

export default new Router({
  routes: [
    // v-if
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
    // v-for
    {
      path: '/page2',
      name: 'Page2',
      component: Page2
    },
    // computed and methods
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    // v-bind:class
    {
      path: '/page4',
      name: 'Page4',
      component: Page4
    },
    // v-on:click
    {
      path: '/page5',
      name: 'Page5',
      component: Page5
    },
    // v-html
    {
      path: '/page6',
      name: 'Page6',
      component: Page6
    },
    // v-model
    {
      path: '/page7',
      name: 'Page7',
      component: Page7
    }
  ]
})
