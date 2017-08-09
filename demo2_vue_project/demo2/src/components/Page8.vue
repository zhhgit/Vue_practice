<template>
  <div>
    <div>
      <todo v-for="item in list" v-bind:person="item" :key="item.id" v-on:say="sayName"></todo>
    </div>
  </div>
</template>

<script>
  import Todo from './Todo.vue'
  export default {
    name: 'page8',
    data: function () {
      return {
        list: [
          {name: 'zhanghao1'},
          {name: 'zhanghao2'},
          {name: 'zhanghao3'}
        ]
      }
    },
    components: {
      Todo
    },
    methods: {
      sayName: function () {
        alert('hello')
      }
    }
  }
</script>
