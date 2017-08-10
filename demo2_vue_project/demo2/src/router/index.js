import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'
import Page4 from '@/components/Page4'
import Page5 from '@/components/Page5'
import Page6 from '@/components/Page6'
import Page7 from '@/components/Page7'
import Page8 from '@/components/Page8'
import Page9 from '@/components/Page9'
import Page10 from '@/components/Page10'

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
    },
    // vue组件,动态props,自定义事件,自定义指令
    {
      path: '/page8',
      name: 'Page8',
      component: Page8
    },
    // filters
    {
      path: '/page9',
      name: 'Page9',
      component: Page9
    },
    // watch
    {
      path: '/page10',
      name: 'Page10',
      component: Page10
    }
  ]
})
