# learn_webpack

## 目录
[快速入门](#快速入门)
## 快速入门

### 创建基本目录
```bash
mkdir learn_webpack

cd learn_webpack 

npm init -y 

mkdir src && touch src/index.js

mkdir dist && touch dist/index.html

touch webpack.config.js
```

### 安装依赖

```bash
npm i webpack webpack-cli webpack-dev-server -D
```
### 编写基本配置
webpack.config.js
```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {},
  plugins: [],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname,'dist'),
    compress:true,
  },
};
```

package.json 
```json
"scripts": {
  "dev": "webpack serve --open",
  "build":"webpack"
},
```
运行命令`npm run dev`跑本地服务，运行`npm run build`执行打包

### 核心概念

```
Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。
context: context即是项目打包的路径上下文，如果指定了context,那么entry和output都是相对于上下文路径的，contex必须是一个绝对路径
```