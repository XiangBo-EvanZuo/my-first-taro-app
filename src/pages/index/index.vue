<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 16:45:13
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-08 14:29:00
 * @FilePath: /myApp2/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="index">
    <nut-toast :msg="msg" v-model:visible="show" />
    <nut-button type="primary" @click="login">登录</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button class="flex" @click="handleClick" type="success"
      >成功按钮</nut-button
    >
    <view :class="{ 'dark': isDarkMode }">
      <view class="bg-white dark:bg-black">123</view>
    </view>
    <nut-switch @change="switchChange" v-model="isDarkMode">12</nut-switch>
  </view>
</template>

<script lang="ts" setup>
import { prequest } from "./../../common/http-get";
import { useCounterStore } from './../../store';
import { ref } from "vue";
const store = useCounterStore()
const isDarkMode = ref(store.isDarkMode);

const msg = ref("");
const show = ref(false);

const handleClick = () => {
  msg.value = "123";
  show.value = true;
};

const switchChange = () => {
  store.triggerDarkMode()
}

const login = async () => {
  const _res = await prequest("/data");
  console.log(_res);
};

defineExpose({
  isDarkMode,
  handleClick,
  login,
  switchChange,
});

</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
