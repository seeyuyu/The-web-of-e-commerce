'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const  commonUrl = require('../src/config.js')
console.log('url', commonUrl)
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    // host: 'http://192.168.99.242', // can be overwritten by process.env.HOST //localhost
    host: '192.168.99.242', // can be overwritten by process.env.HOST //localhost

    port: '8080', // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,// 是否自定代开浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',//yyt 2019-08-25'cheap-module-eval-source-map'

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
    proxyTable: {
      // '/api': {
      //   target: 'http://39.107.68.213:8081', // 你要代理的域名和端口号，要加上http
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '' // 这里用‘/api’代替target里面的地址，组件中调用接口时直接用api代替 比如我要调用'http://xxx.com:8080/api/NEWS/getNews.json?page=1&pageSize=10
      //   }
      // },
      '/api': {
        target: 'http://127.0.0.1:8081', // 你要代理的域名和端口号，要加上http
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 这里用‘/api’代替target里面的地址，组件中调用接口时直接用api代替 比如我要调用'http://xxx.com:8080/api/NEWS/getNews.json?page=1&pageSize=10
        }
      },
      '/dmall': {
        target: 'http://searchgw.dmall.com', // 你要代理的域名和端口号，要加上http
        changeOrigin: true,
        pathRewrite: {
          '^/dmall': '' // 这里用‘/api’代替target里面的地址，组件中调用接口时直接用api代替 比如我要调用'http://xxx.com:8080/api/NEWS/getNews.json?page=1&pageSize=10
        }
      }
    }
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
