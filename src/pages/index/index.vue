<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 16:45:13
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-07 17:20:04
 * @FilePath: /myApp2/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view class="index">
    <view>
      <img src="" alt="">
    </view>
    {{ msg }}
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)">点我</nut-button>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
    <nut-button @tap="clickItem" type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button class="flex" type="success">成功按钮</nut-button>
    <view :class="{'dark': isDarkMode}">
        <view  class="bg-white dark:bg-black">123</view>
    </view>
    <nut-switch v-model="isDarkMode">12</nut-switch>
  </view>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  name: 'Index',
  components: {

  },
  setup(){
    const state = reactive({
      msg: '欢迎使用 NutUI3.0 开发小程序',
      msg2: '你成功了～',
      type: 'text',
      show: false,
      isDarkMode: false
    });

    const handleClick = (type, msg, isDarkMode = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.isDarkMode = cover;
    };

    return {
      ...toRefs(state),
      handleClick
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
