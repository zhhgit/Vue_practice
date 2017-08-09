<template>
  <div>
    <div>
        <div v-on:click="clickTriggered" v-init>
          {{ person.name }}
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    data: function () {
      return {
      }
    },
    props: {
      person: {
        type: Object
      }
    },
    methods: {
      clickTriggered: function (event) {
        this.$emit('say')
        alert(event.target.innerHTML)
      }
    },
    directives: {
      init: {
        inserted: function (el, binding, vnode) {
          alert('a todo component is inserted')
          console.log(el)
          console.log(binding)
          console.log(vnode)
        }
      }
    }
  }
</script>
