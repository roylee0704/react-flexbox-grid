const path = require('path');
const pkg = require('./package.json');

const LIB_NAME = pkg.name;

module.exports = {
  entry: {
    [LIB_NAME]: path.resolve(__dirname, 'src')
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactFlexboxGrid',
    filename: '[name].js',
  },
  externals: ['react']
};
