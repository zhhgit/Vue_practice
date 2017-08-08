<template>
  <div>
    <div v-html="dom"></div>
  </div>
</template>

<script>
  export default {
    name: 'page6',
    data: function () {
      return {
        dom: '<h1>标题</h1>'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
