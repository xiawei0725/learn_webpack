# learn_webpack

## 目录

[快速入门](#快速入门)

[支持style相关模块](#支持style相关模块)
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

## 支持style相关模块

上面知道入口文件是`src/index.js`,将来我们可以直接在js中使用`import`的方式导入样式，我们期望样式能够生效，并且支持一些常用的预处理器以及将来可能我们还需要自动添加一些css3相关的前缀等

### 处理css

src/style/a.css

```css
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
}
```

安装处理css的`loader`

```bash
npm i -D style-loader css-loader
```

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ],
  },
  plugins: [],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
  },
};

```

### 处理less

安装`less-loader`
```bash
npm i less less-loader -D
```
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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [],
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
  },
};

```
### 自动添加前缀

安装依赖

```bash
npm install --save-dev postcss-loader postcss autoprefixer 
```

style/a.css

```css

.box {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  transform: translateX(100px);
}

```

`.browserslistrc` 这个文件是浏览器兼容声明文件，你可以配置了之后采用`npx browserslist`来看兼容到哪些浏览器，具体官方文档参考：`https://github.com/browserslist/browserslist#queries`

```
last 2 versions
not ie <= 9
```





