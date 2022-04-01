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
        username:""
    };
  },
  created() {
      this.verify();
  },
  methods: {
      async verify(){
          const user = localStorage.getItem("tuso_user")
          const { data: res } = await http.post("/api/verify");
          if (res.code != null && res.code == 200) {
              this.username=user
          }else{
            localStorage.clear();
          }
      },
      handleCommand(command){
          if(command=="logout"){
               this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
          }
      }
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
