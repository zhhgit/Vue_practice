<template>
  <div>
    <div v-if = "see">
      Item1
    </div>
    <div v-else>
      Item2
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page1',
    data: function () {
      return {
        see: false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
