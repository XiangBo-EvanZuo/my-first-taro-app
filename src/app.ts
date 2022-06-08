/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 16:45:13
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-08 17:38:43
 * @FilePath: /my-first-taro-app/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Taro from '@tarojs/taro';
import { createApp } from 'vue'
import { Button, Toast, Switch, Icon, Tabbar, TabbarItem } from '@nutui/nutui-taro';
import { createPinia } from 'pinia';

import './app.scss'
import 'windi.css'


const App = createApp({
  onShow: function () {
    Taro.hideHomeButton()
  }
})
const pinaInstance = createPinia()
App
  .use(pinaInstance)
  .use(Button)
  .use(Toast)
  .use(Switch)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem)

export default App
