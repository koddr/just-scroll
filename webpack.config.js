webpackConfig = {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ["style-loader", "css-loader?-minimize", "sass-loader?sourceMap"]
      }
    ]
  }
};

module.exports = webpackConfig;