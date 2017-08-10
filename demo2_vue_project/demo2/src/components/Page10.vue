<template>
  <div @click="addCount">
    {{ count }}
  </div>
</template>

<script>
  export default {
    name: 'page10',
    data: function () {
      return {
        count: 0
      }
    },
    watch: {
      count: function () {
        alert('count add one')
      }
    },
    methods: {
      addCount: function () {
        this.count = this.count + 1
      }
    }
  }
</script>
