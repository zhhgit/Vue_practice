<template>
  <div>
    <div>
      请输入手机号：
      <input type="text" v-model="mobile" />
      <br />
      输入的手机号为：
      {{ mobile }}

    </div>
  </div>
</template>

<script>
  export default {
    name: 'page7',
    data: function () {
      return {
        mobile: ''
      }
    }
  }
</script>
