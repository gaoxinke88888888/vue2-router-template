<template>
  <div>
      <div class="login_container">
        <div class="login_box">
            <div class="title">huodalang</div>
            <el-form size="mini">
                <el-form-item>
                    <el-input placeholder="用户名" :prefix-icon="User" v-model="loginInfo.name"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input
                        placeholder="密码"
                        show-password
                        :prefix-icon="Key"
                        v-model="loginInfo.pwd"
                    ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {}
  },
  created () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>
