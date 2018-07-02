# 很棒棒少年团 Where to go 实战

## 目录结构

```
├── README.md
├── build
├── config
├── index.html
├── package.json
├── src
│   ├── App.vue //入口文件
│   ├── assets  //静态资源,图片和less
│   │   ├── images
│   │   └── less
│   ├── components // 组件目录
│   │   ├── CityHeader.vue
│   │   ├── HelloWorld.vue
│   │   └── HomeHeader.vue
│   ├── main.js //入口文件
│   ├── router
│   │   └── index.js //路由文件
│   └── views //所有的页面
│       ├── Test.vue //实例文件
│       ├── city //城市页目录
│       ├── detail //详情页目录
│       └── home //首页目录
└── static
```

## 说明

* 使用了Less来做css预处理。
* 使用eslint来规范大家写的代码。
* `vue-awesome-swipe`,
`aixos`,
`vuex`,
`vue-router`,
`better-scroll`
都已安装完毕,install一下就可以了。

## 安装步骤

``` 
# 安装依赖
npm install

# 执行下列代码在浏览器打开localhost:8080
npm run dev
```



使用愉快。
