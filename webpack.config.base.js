const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  externals: {
    'react': reactExternal
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  node: {
    process: false
  },
  output: {
    library: 'ReactFexboxGrid',
    libraryTarget: 'umd'
  }
};
