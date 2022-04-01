<template>
  <div>
    <el-container>
      <el-header style="padding: 0 0 0 0">
        <el-menu
          default-active="1"
          mode="horizontal"
        >
            <el-menu-item index="1">菜单一</el-menu-item>
            <el-menu-item index="2">菜单二</el-menu-item>
            <el-menu-item index="3">菜单三</el-menu-item>
            <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
        </el-menu>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>
<style scoped></style>
