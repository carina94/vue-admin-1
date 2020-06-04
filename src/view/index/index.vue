<!--
 * @Author: your name
 * @Date: 2020-06-03 11:45:36
 * @LastEditTime: 2020-06-04 15:41:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin-1\src\view\index\index.vue
-->
<template>
  <div>
    index-components部分
    <div>px-rem</div>
    <!-- <img src="@/assets/logo.png" /> -->
    <!-- 自定义组件  -->
    <PMheader></PMheader>
    <el-button type="primary" v-has="true">主要按钮(index部分)</el-button>
  </div>
</template>
<script>
export default {
  mounted () {
    const obj = {
      foo: {
        bar: {
          baz: 'index部分-baz',
          fun: () => {
            return 'index部分-fun函数';
          }
        }
      }
    };
    let baz = obj?.foo?.bar?.baz;
    let fun = obj?.foo?.bar?.fun();
    console.log(baz);
    console.log(fun)
  }
};
</script>
<style lang="less" scoped>
div {
  color: @pm-base-color;
  font-size: 100px;
}
</style>