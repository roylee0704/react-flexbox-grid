const merge = require('webpack-merge');
const testConfig = require('./webpack.config.test');
const developmentConfig = require('./webpack.config.development');
const productionConfig = require('./webpack.config.production');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const configForEnv = (env) => {
  switch (env) {
  case 'test':
    return testConfig;
  case 'development':
    return developmentConfig;
  case 'production':
    return productionConfig;
  default:
    throw new TypeError(`Invalid environment given ${env}!`);
  }
};

const baseConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss')
      }
    ]
  },
  resolve: {
    extensions: ['', '.scss', '.js', '.json']
  },
  postcss: [autoprefixer],
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ]
};

module.exports = merge(baseConfig, configForEnv(process.env.NODE_ENV));
