/*
 * @Author: Evan Zuo v_wangxiangbo01@baidu.com
 * @Date: 2022-06-07 14:08:49
 * @LastEditors: Evan Zuo v_wangxiangbo01@baidu.com
 * @LastEditTime: 2022-06-07 14:15:32
 * @FilePath: /my-first-taro-app/windi.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// windi.config.js
export default {
    darkMode: 'class',
    prefixer: false,
    extract: {
        // 忽略部分文件夹
        exclude: ['node_modules', '.git', 'dist']
    },
    corePlugins: {
        // 禁用掉在小程序环境中不可能用到的 plugins
        container: false
    }
}