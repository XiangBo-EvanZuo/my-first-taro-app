<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-08 16:15:50
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-08 18:25:43
 * @FilePath: /my-first-taro-app/src/components/TabBar.Vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <nut-tabbar :class="{ 'my_dark': store.isDarkMode }" v-model:visible="visible" @tab-switch="tabSwitch" unactive-color="#7d7e80" active-color="#1989fa"  :bottom="true" :safeAreaInsetBottom="true">
    <nut-tabbar-item tab-title="首页" icon="home" num="11"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category" :dot="true"></nut-tabbar-item>
    <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" icon="cart" num="110"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
import { useCounterStore } from './../store';

import { ref } from 'vue'
  export default{
    setup() {
      const store = useCounterStore()

      function tabSwitch(item, index) {
        // console.log(item, index);
        store.changeTab(index)
      }
      const visible = ref(store.currentTabIndex)
      return {
        tabSwitch,
        visible,
        store,
      };
    },
  }
</script>
<style lang="scss">
.my_dark {
  background: black;
}
</style>
