<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-06 14:59:00
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-06 18:47:50
 * @FilePath: /my-first-taro-app/src/components/NumberDisplay.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <view>
    <text class="title">{{ getNumbers }}</text>
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

    const store = useStore()
    const getNumbers = computed(() => store.getters.getNumbers)
</script>

<style>
.title {
  font-size: 40px;
}
</style>
