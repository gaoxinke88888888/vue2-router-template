<template>
  <div>
    <el-container>
      <el-header style="padding: 0 0 0 0">
        <el-menu default-active="1" mode="horizontal">
          <el-menu-item index="1">菜单一</el-menu-item>
          <el-menu-item index="2">菜单二</el-menu-item>
          <el-menu-item index="3">菜单三</el-menu-item>
          <el-dropdown class="dropdown" @command="handleCommand">
            <span class="el-dropdown-link">
              {{ username }} <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">注销</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
import http from "@/service/http";
export default {
  name: "App",
  data() {
    return {
      username: "",
    };
  },
  created() {
    this.verify();
  },
  methods: {
    async verify() {
      const user = localStorage.getItem("tuso_user");
      const { data: res } = await http.post("/api/verify");
      if (res.code != null && res.code == 200) {
        this.username = user;
      } else {
        localStorage.clear();
      }
    },
    handleCommand(command) {
      if (command == "logout") {
        this.$confirm("是否注销?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.$message({
              type: "success",
              message: "已注销登陆!",
            });
            localStorage.clear();
            this.$router.push("/login");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消",
            });
          });
      }
    },
  },
};
</script>

<style scoped>
.dropdown {
  float: right;
  padding-top: 15px;
  padding-right: 20px;
}
.el-dropdown-link {
  font-size: 20px;
  font-weight: bold;
}
</style>
