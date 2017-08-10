const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [{
      test: /(\.scss|\.css)$/,
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
    }]
  },
  watch: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ]
};
