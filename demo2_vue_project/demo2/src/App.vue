<template>
  <div id="app">
    <LinkArea></LinkArea>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  import LinkArea from './components/LinkArea.vue'
  export default {
    name: 'app',
    components: {
      LinkArea
    }
  }
</script>
