<template>
  <div>
    <router-link to="/page1">Page1 v-if</router-link><br />
    <router-link to="/page2">Page2 v-for</router-link><br />
    <router-link to="/page3">Page3 computed and methods</router-link><br />
    <router-link to="/page4">Page4 v-bind:class</router-link><br />
    <router-link to="/page5">Page5 v-on:click</router-link><br />
    <router-link to="/page6">Page6 v-html</router-link><br />
    <router-link to="/page7">Page7 v-models</router-link><br />
    <router-link to="/page8">Page8 vue组件,动态props,自定义事件,自定义指令</router-link>
  </div>

</template>

<script>
  export default {
    name: 'linkArea'
  }
</script>
