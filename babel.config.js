/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-06 17:05:37
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-06 18:04:39
 * @FilePath: /my-first-taro-app/babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: true
    }]
    ],
    plugins: [
        [
            "import",
            {
                "libraryName": "@nutui/nutui",
                "libraryDirectory": "dist/packages/_es",
                // customName自定义兼容国际化使用
                "customName": (name, file) => {
                    if (name == 'Locale') {
                        return '@nutui/nutui/dist/packages/locale/lang'
                    } else {
                        return `@nutui/nutui/dist/packages/_es/${name}`
                    }
                },
                "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
                "camel2DashComponentName": false
            },
            'nutui3-vue'
        ],
    ]
}
