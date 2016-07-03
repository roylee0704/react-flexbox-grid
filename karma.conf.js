const webpackConfig = require('./webpack.config.test');

module.exports = function karmaConfig(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/browser.js',
      'tests.webpack.js',
      'test/reactErrors.js'
    ],
    reporters: ['dots'],
    preprocessors: {'tests.webpack.js': ['webpack']},
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
