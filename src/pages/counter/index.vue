<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 16:45:13
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-08 14:26:13
 * @FilePath: /myApp2/src/pages/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view>
    <view :class="{ 'dark': counter.isDarkMode }">
      <view class="bg-white dark:bg-black">{{ counter.count }}</view>
    </view>
    <nut-button @click="addCount"></nut-button>
  </view>
</template>

<script>
import { useCounterStore } from './../../store';
import { ref } from 'vue'

export default {
  setup() {
    const counter = useCounterStore();

    const addCount = () => {
      //  counter.count++;

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      counter.increment()
    };
    return {
      counter,
      addCount,
    };
  }
};
</script>
