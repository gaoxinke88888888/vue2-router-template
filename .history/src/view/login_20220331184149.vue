<template>
  <div>
      <div class="login_container">
        <div class="login_box">
            <div class="title">huodalang</div>
            <el-form size="mini">
                
            </el-form>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        loginInfo:{
            name:"",
            pwd:""
        }
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    login(){

    }
  }
}
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
    top: 50%;
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
