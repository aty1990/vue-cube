# projectname

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 文档地址
# https://didi.github.io/cube-ui/#/zh-CN


#注意事项
1：同级路由转场效果一定要配置router.js里组件的meta:{index} 的值，否则动画不生效
2：父子路由只需在组件最外层加上<transition name=page-move></transition>的标签即可