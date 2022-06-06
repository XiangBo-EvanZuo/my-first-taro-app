<!--
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-06 14:59:00
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-06 18:49:24
 * @FilePath: /my-first-taro-app/src/components/NumberSubmit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <input v-model="number" type="number" class="input" />
  <button @tap="addNumber">Add new number</button>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const number = ref(0)

function addNumber() {
  store.dispatch('addNumber', Number(number.value))
}
</script>

<style>
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
