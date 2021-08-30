/*
 * @Description: 
 * @Author: 水印红枫
 * @Editor: 水印红枫
 * @Date: 2021-08-30 13:21:35
 * @LastEditors: 水印红枫
 */
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#000000',
        },
      },
    },
  ],
};