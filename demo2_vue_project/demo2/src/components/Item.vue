<template>
  <div>
    <div v-if = "see">
      哈哈哈
    </div>
  </div>
</template>

<script>
  export default {
    name: 'item',
    data: function () {
      return {
        see: true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
