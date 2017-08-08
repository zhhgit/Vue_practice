<template>
  <div>
    {{ computedMessage }}
    <br />
    {{ messageMethod() }}
  </div>
</template>

<script>
  export default {
    name: 'page3',
    data: function () {
      return {
        message: 'hello'
      }
    },
    // computed侧重计算返回的值
    computed: {
      computedMessage: function () {
        return this.message + ' world'
      }
    },
    // methods是真正的方法，调用方式不同
    methods: {
      messageMethod: function () {
        return this.message + ' world'
      }
    }
  }
</script>
