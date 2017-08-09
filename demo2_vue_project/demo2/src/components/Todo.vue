<template>
  <div>
    <div>
        <div v-on:click="clickTriggered">
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
    }
  }
</script>
