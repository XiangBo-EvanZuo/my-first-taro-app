/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-08 13:50:27
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-08 14:20:56
 * @FilePath: /my-first-taro-app/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://pinia.esm.dev/introduction.html
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
          count: 0,
          isDarkMode: false,
        };
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++;
        },
        triggerDarkMode() {
            this.isDarkMode = !this.isDarkMode
        }
    },
});

// You can even use a function (similar to a component setup()) to define a Store for more advanced use cases:
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//
//   function increment() {
//     count.value++
//   }
//
//   return {count, increment}
// })