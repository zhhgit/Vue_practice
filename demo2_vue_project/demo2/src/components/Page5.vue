<template>
  <div>
    <button v-on:click="say('zhanghao')">调用methods中的say('zhanghao')</button>
  </div>
</template>

<script>
  export default {
    name: 'page5',
    data: function () {
      return {
        message: 'hello'
      }
    },
    methods: {
      say: function (name) {
        alert(this.message + ' ' + name)
      }
    }
  }
</script>
