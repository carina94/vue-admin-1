<!--
 * @Author: your name
 * @Date: 2020-06-03 11:45:36
 * @LastEditTime: 2020-06-04 15:14:05
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-1\src\layout\main.vue
-->
<template>
  <div>
    <div>main 公共部分</div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
</style>