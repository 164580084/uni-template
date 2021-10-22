# Node自动化部署脚本


### 新建 View 模版
```
命令：npm run new:view

1、输入要构建的 View 名称、默认生成在 pages/ 目录下（Default Syntax）
2、默认 pages/index 为主包, 对应生成路由至相关文件
3、home/index则会生成home文件夹再生成index.vue(以此类推), home会生成同名文件夹+文件
```

### 新建 API 模版
```
命令：npm run new:api

1、输入要构建的 API 名称、默认生成在 common/request/ 目录下
```

### 新建 Vuex 模版
```
命令：npm run new:store

1、输入要构建的 Store 名称、默认生成在 store/modules/ 目录下
```

### 新建 Component 以及 Global Component
```
命令：npm run new:comp [g]

1、输入构建的 Component 名称或路径文件名称，默认生成 components/ 目录下（Default Syntax）
2、如需构建全局组件, npm run new:comp [g]，则会再 components/ 目录生成index.js并注册
```
