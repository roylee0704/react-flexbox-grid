# react-flexbox-grid
[![npm version](https://badge.fury.io/js/react-flexbox-grid.svg)](https://badge.fury.io/js/react-flexbox-grid)
[![Build Status](https://travis-ci.org/roylee0704/react-flexbox-grid.svg)](https://travis-ci.org/roylee0704/react-flexbox-grid)
[![NPM Status](http://img.shields.io/npm/dm/react-flexbox-grid.svg?style=flat-square)](https://www.npmjs.org/package/react-flexbox-grid)


React-Flexbox-Grid is a set of React components that implement [flexboxgrid.css](https://goo.gl/imrHBZ). It's built on top of some the trendiest proposals like CSS Modules (written in SASS), Webpack and ES6. The library harmoniously integrates with your Webpack workflow and it's easily customizable and very flexible.


http://roylee0704.github.io/react-flexbox-grid/


Usage
-----

Although there are other ways to use React Toolbox, the recommended way is to create a Webpack workflow with [Babel Loader](https://github.com/babel/babel-loader), [CSS Loader](https://github.com/webpack/css-loader) and [SASS Loader](https://github.com/jtangelder/sass-loader). A good starting point is [react-flexbox-grid-example](https://github.com/roylee0704/react-flexbox-grid-example), be sure to also checkout [webpack config](https://github.com/roylee0704/react-flexbox-grid-example/blob/master/webpack.config.js) in the example.



### Basic webpack configuration

You probably don't want to load all dependencies with the CSS Modules feature, so you can add this very targeted piece of configuration as a webpack loader:

```js
{
  test: /\.scss$/,
  loaders: ['style', 'css?modules', 'sass'],
  include: path.resolve(__dirname, './node_modules/react-flexbox-grid'),
}
```

But make sure your other CSS loaders don't pick it up. If, for example, there is a loader which includes all SCSS files in `node_modules`, you can exclude this module by using `exclude`:

```js
{
  test: /\.scss$/,
  loaders: ['style', 'css?foo=bar', 'sass?config&anotherConfig'],
  include: path.resolve(__dirname, './node_modules'),
  exclude: path.resolve(__dirname, './node_modules/react-flexbox-grid'),
}
```

Example
-------
Looking for example to use `react-flexbox-grid`? Head over to [react-flexbox-grid-example](https://github.com/roylee0704/react-flexbox-grid-example).


Installation
------------

React Toolbox can be installed as an [npm package](https://www.npmjs.com/package/react-flexbox-grid);

```
npm install react-flexbox-grid
```


Once you have the workflow ready, you can just require and use the components:

```jsx
import React from `react`;
import { Grid } from `react-flexbox-grid/lib/index`;

React.render(<Grid />, document.querySelector('#main'));
```

The previous code creates a React container component based on `React Flexbox Grid` container. It's important to notice that requiring a module from the exposed root of the package will import the **SASS** of the component.


I encourage you to work with webpack but if you want to use `React Flexbox Grid` in an old fashioned way, you must generate a build with all the css and javascript and include it in your `index.html`. Then you can use the components exposed in the `window` object.


Code snippets
------------
```jsx
const {Grid, Row, Col} = require('react-flexbox-grid');

const App = React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}>Hello, world!</Col>
        </Row>
      </Grid>
    );
  }
});
```
Contributors
-----------
[![Roy Lee](https://avatars0.githubusercontent.com/u/3850661?v=3&s=144)](https://github.com/roylee0704/) | [![Helder Santana](https://avatars1.githubusercontent.com/u/134727?v=3&s=144)](https://github.com/heldr/) | [![Ankit](https://avatars0.githubusercontent.com/u/1939352?v=3&s=144)](https://github.com/ankitduseja/)
---|---|---
[Roy Lee](https://github.com/roylee0704) | [Helder Santana](https://github.com/heldr/) | [Ankit](https://github.com/ankitduseja/)

License
-------
MIT
