<template>
  <div>
    <div>
        <div>
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
    }
  }
</script>
