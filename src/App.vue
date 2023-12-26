<script setup>
// 导入element-puls中文包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

</script>

<template>
  <div>
     <!-- 路由视图出口的地方 -->
     <el-config-provider :locale="zhCn">
      <!-- 路由视图出口的地方 -->
      <router-view></router-view>
    </el-config-provider>
  </div>

</template>

<style scoped>

</style>
