<template>
  <div>
    {{ mobile | formatMobile }}
  </div>
</template>

<script>
  export default {
    name: 'page9',
    data: function () {
      return {
        mobile: '15100001234'
      }
    },
    filters: {
      formatMobile: function (mobile) {
        var ret = mobile.substr(0, 3) + '****' + mobile.substr(mobile.length - 4, 4)
        return ret
      }
    }
  }
</script>
