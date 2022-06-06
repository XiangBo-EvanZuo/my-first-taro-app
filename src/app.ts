/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-06 14:59:00
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-06 15:10:14
 * @FilePath: /my-first-taro-app/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import store from './store'

import './app.scss'

import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(store).use(NutUI)

export default App
