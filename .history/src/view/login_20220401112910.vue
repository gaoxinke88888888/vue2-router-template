<template>
  <div class="login_container">
    <div class="login_box">
      <div class="title">huodalang</div>
      <el-form size="mini">
        <el-form-item>
          <el-input
            placeholder="用户名"
            prefix-icon="el-icon-user"
            v-model="loginInfo.name"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码"
            show-password
            prefix-icon="el-icon-key"
            v-model="loginInfo.pwd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      loginInfo: {
        name: "",
        pwd: "",
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    async login() {
      if (this.loginInfo.name != "" && this.loginInfo.pwd != "") {
        const { data: res } = await axios.post("/api/login", {
          username: this.loginInfo.name,
          password: this.loginInfo.pwd,
        });
        if (res.code != null && res.code == 200) {
          this.$router.push("/");
          this.$message({
            message: res.message,
            type: "success",
          });
          localStorage.setItem("tuso_token",res.data.token)
          localStorage.setItem("tuso_user",res.data.token)
          console.log(res.data);
        } else {
          this.$message({
            message: res.message,
            type: "warning",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.title {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  color: rgb(178, 194, 197);
}
.login_container {
  background-image: linear-gradient(-180deg, #1a1454 0%, #0e81a5 100%);
  /*background-image: url("../images/bg_login.png");*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
.login_box {
  width: 290px;
  height: 250px;
  /* background-color: #fff; */
  background-color: #2e527bb3;
  border-radius: 5px;

  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
.el-form {
  padding: 32px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
.el-button {
  width: 100%;
}
.code {
  width: 45%;
}
img {
  /* style="width: 100px; height: 30px; margin-left:5px;vertical-align: middle;" */
  display: line-inline;
  width: 45%;
  height: 28px;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 3px;
}
.rememberMe {
  color: #fff;
}
</style>
