<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-06 14:59:00
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-07 15:10:35
 * @FilePath: /my-first-taro-app/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="index">
    <NumberDisplay />
    <NumberSubmit />
    <nut-button @tap="clickItem" type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button class="flex" type="success">成功按钮</nut-button>
    <view :class="{'dark': isDarkMode}">
        <view  class="bg-white dark:bg-black">123</view>
    </view>
    <nut-switch v-model="isDarkMode" @tap="tapSwitch">12</nut-switch>
  </view>
</template>

<script setup>
import NumberDisplay from "../../components/NumberDisplay.vue";
import NumberSubmit from "../../components/NumberSubmit.vue";
import { ref } from 'vue';



    const isDarkMode = ref(false);
    const clickItem = (e, other) => {
        console.log({e, other})
        isDarkMode.value = !isDarkMode.value

    }
    const tapSwitch = (e, other) => {
        console.log(e, other)
        isDarkMode.value = !isDarkMode.value
    }

</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
