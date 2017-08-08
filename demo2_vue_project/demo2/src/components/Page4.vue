<template>
  <div>
    <div v-bind:class="{title: useTitle}">
      哈哈哈
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page4',
    data: function () {
      return {
        useTitle: true
      }
    }
  }
</script>

<style scoped>
  .title{
    color: red;
  }
</style>
