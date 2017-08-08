<template>
  <div>
    {{ computedMessage }}
    {{ messageMethod }}
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
    computed: {
      computedMessage: function () {
        return this.message + ' world'
      }
    },
    methods: {
      messageMethod: function () {
        return this.message + ' world'
      }
    }
  }
</script>
