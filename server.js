const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const port = 8080;

const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, resp) => {
  resp.sendFile(path.join(__dirname, './spec/index.html'));
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(path.join(__dirname, './spec/index.html'));

  console.log('Listening at http://0.0.0.0:' + port);
});
