## lidy觉得小杨要做的
1. 下拉加载不要写原生，你以前写过，用UI框架来实现；
2. 试着用sass来写css,可以从最简单的嵌套css写起；
3. 全局axios,全局配置，拦截，鉴权，重定向；




##遇到的问题和解决思路
==========================
####1.运行项目后白屏，不显示页面内容
package.json中找到 scripts.dev，在后面加上host参数 --host 0.0.0.0
```
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js --host 0.0.0.0"
```
####1.设置多个代理
config index.js中设置
```
 proxyTable: {
      '/api': {
        target: 'url',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      },
      '/img': {
        target: imgUrl,
        changeOrigin: true,
        pathRewrite: {
          '^/img': 'img'
        }
      }
    }
```
