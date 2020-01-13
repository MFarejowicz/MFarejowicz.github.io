var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: "./index.jsx",
  output: {
    publicPath: "",
    path: path.join(__dirname, "/static"),
    filename: "index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"],
          plugins: ["transform-class-properties"],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: "[path][name]__[local]___[hash:base64:5]",
        },
      },
    ],
  },
};
