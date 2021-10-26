# uni-app 项目初始化

### Project setup
```
yarn install || npm install

```

### Project scripts
```
npm run new:comp
npm run new:api
npm run new:view
npm run new:store

```

### Compiles and hot-reloads for development
```
npm run serve
npm run dev:[mp-weixin]

```

### Compiles and minifies for production
```
npm run build
npm run build:[mp-weixin]

```
# 必须使用
# ESLint 自动修复

### VSCode
```
步骤：文件 - 首选项 - 设置 - ESLint - Settings.json 新增以下代码块

"editor.codeActionsOnSave": {
    "source.fixAll": true
}
```

### HBuilder X
```
步骤：工具 - 设置 - 插件配置 eslint-js/vue (开启自动修复、实时校验) .eslintrc.js 新增项目中 .eslintrc.js Rule

目录：uni-cli-template/.eslintrc.js rules
```
