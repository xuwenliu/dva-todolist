# dva-todolist
react + dva todolist 实例

# 安装 dva-cli
```js
    $ npm install dva-cli -g
    $ dva -v
    dva-cli version 0.10.1
```

# 创建新应用
```js
    dva new dva-todolist
    $ cd dva-todolist
    $ npm start

```

# 使用 antd
```
    1. npm install antd babel-plugin-import --save
    2. 编辑 .webpackrc，使 babel-plugin-import 插件生效。
    {
      "extraBabelPlugins": [
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
      ]
    }
    3.dva-cli 基于 roadhog 实现 build 和 dev，更多 .webpackrc 的配置详见：https://github.com/sorrycc/roadhog#%E9%85%8D%E7%BD%AE
```

# 使用插件
- [接口请求地址jsonplaceholder](https://jsonplaceholder.typicode.com/)
- [dva](https://dvajs.com/guide/)
- [切换 history 为 browserHistory](https://dvajs.com/knowledgemap/#%E5%88%87%E6%8D%A2-history-%E4%B8%BA-browserhistory)
- [基于 action 进行页面跳转](https://dvajs.com/knowledgemap/#%E5%9F%BA%E4%BA%8E-action-%E8%BF%9B%E8%A1%8C%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC)
- [错误处理](https://dvajs.com/knowledgemap/#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86)

- [classnames](https://github.com/JedWatson/classnames)
- [dva-loading](https://github.com/dvajs/dva/tree/master/packages/dva-loading)
