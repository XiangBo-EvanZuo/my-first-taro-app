<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 16:45:13
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-07 18:30:49
 * @FilePath: /myApp2/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="index">
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
    <nut-button @tap="clickItem" type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button class="flex" @click="handleClick" type="success">成功按钮</nut-button>
    <view :class="{'dark': isDarkMode}">
        <view  class="bg-white dark:bg-black">123</view>
    </view>
    <nut-switch v-model="isDarkMode">12</nut-switch>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
    const isDarkMode = ref(true)
    const msg = ref('')
    const show = ref(false)

    const handleClick = () => {
        msg.value = '123'
        show.value = true
    }

    if (false) console.log(isDarkMode)
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
