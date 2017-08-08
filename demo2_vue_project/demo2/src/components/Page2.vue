<template>
  <div>
    <div v-for="item in list">
      {{ item }}
    </div>
    <div v-for="(value, key) in person">
      {{ key }} : {{ value }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page1',
    data: function () {
      return {
        list: ['1', '2', '3', '4', '5', '6'],
        person: {
          name: 'zhanghao',
          age: '27'
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
