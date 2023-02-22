# Turborepo package npm

基于turborepo package编译开发，webpack打包npm。

## 安装到workspace
```
pnpm i npm-package -Dw
```

## 所有packages里的包执行命令
```
pnpm -r install npm-package
```

## 指定packages里单独包执行命令
```
pnpm -F imba-package run build
```

## 安装packages里包关联workspace -> "imba-xxx": "workspace:*" 通过pnpm publish打包后会自动解析关联版本信息。
```
pnpm -F imba-package i imba-xxx@*
```

## 编译所有packages里的包
```
pnpm run build
```

## eslint检测所有packages里的包
```
pnpm run lint
// 或检测并修复
pnpm run lint:fix
```

## 清除所有packages里的不必要的文件
```
pnpm run clear:node
// or
pnpm run clear:dist
// or
pnpm run clear:all
```

## 清除所有packages里的不必要的文件
```
pnpm run clear:node
// or
pnpm run clear:dist
// or
pnpm run clear:all
```

## 根据docsify轻量级生成文档内容
```
pnpm run docs
```

## husky commitlint 提交并验证
```
pnpm run czc
```

## 准备发布 进行登录
```
pnpm run adduser
```

## 单个执行编译并发布，编译后选择版本号发布
```
pnpm -F imba-package run pub
```

## 选择版本号直接发布 所有packages里包执行publish
```
pnpm run pub:all
```

## 可采用tsup-build
## tscup通过esbuild编译的。cjs,mjs,dts混合编译可以生成，但是代码没压缩，没经过webpack和babel-loader。
pnpm -F imba-package run tsup-build

## 可编写window和dom基本测试案例
## jsdom追加了基本window和document功能,如下。
```
window.localStorage.setItem('key', 'val')
```