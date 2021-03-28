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
