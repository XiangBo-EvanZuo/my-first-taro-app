/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 16:45:13
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-08 16:15:27
 * @FilePath: /my-first-taro-app/src/app.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/counter/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // 组件代替
  // tabBar: {
  //   color: '#333333',
  //   selectedColor: '#d34716',
  //   backgroundColor: '#ffffff',
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '首页',
  //       iconPath: './assets/images/tabbar/home-regular.png',
  //       selectedIconPath: './assets/images/tabbar/home.png'
  //     },
  //     {
  //       pagePath: 'pages/counter/index',
  //       text: '分类',
  //       iconPath: './assets/images/tabbar/layout-fluid-regular.png',
  //       selectedIconPath: './assets/images/tabbar/layout-fluid.png'
  //     },
  //     // {
  //     //   pagePath: 'pages/main/cart/index',
  //     //   text: '购物车',
  //     //   iconPath: './assets/images/tabbar/shopping-cart-regular.png',
  //     //   selectedIconPath: './assets/images/tabbar/shopping-cart.png'
  //     // },
  //     // {
  //     //   pagePath: 'pages/main/member/index',
  //     //   text: '我的',
  //     //   iconPath: './assets/images/tabbar/user-regular.png',
  //     //   selectedIconPath: './assets/images/tabbar/user.png'
  //     // },
  //   ]
  // }
});