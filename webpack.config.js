const merge = require('webpack-merge');
const testConfig = require('./webpack.config.test');
const developmentConfig = require('./webpack.config.development');
const productionConfig = require('./webpack.config.production');
const autoprefixer = require('autoprefixer');

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
      }
    ]
  },
  resolve: {
    extensions: ['', '.css', '.scss', '.js', '.json']
  },
  postcss: [autoprefixer]
};

module.exports = merge(baseConfig, configForEnv(process.env.NODE_ENV));
