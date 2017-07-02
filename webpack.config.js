module.exports = function() {
  return {
    entry: "./index.jsx",
    output: {
      path: __dirname + "/static",
      filename: "index.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: "babel-loader",
          query: {
            "presets": ["es2015", "react"]
          }
        }
      ]
    }
  }
};
