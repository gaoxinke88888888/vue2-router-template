<template>
  <div>
    <el-container>
      <el-header style="padding: 0 0 0 0">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">菜单一</el-menu-item>
            <el-menu-item index="2">菜单二</el-menu-item>
            <el-menu-item index="3">菜单三</el-menu-item>
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
