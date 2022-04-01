<template>
  <div id="app">
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {}
  },
  created () {
    this.request()
  },
  computed: {
  },
  methods: {
    request () {
      service.request({
        method: 'POST',
        url: 'userInfo'
      }).then(res => {
        if (res.code === 1) {
          console.log('res1', res)
        } else {
          console.log('res2', res)
          this.$notify.error({
            title: '错误',
            message: res.msg
          })
        }
      }).catch(err => {
        service.error(err, {
          that: this
        })
      })
    }
  }
}
</script>

<style>

</style>
