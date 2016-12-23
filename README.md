# fork: falieson/react-flexbox-grid
this is a fork from react-flexbox-grid which adds the ability to responsively hide columns using 0 as the column size: `<Col xs={0}>`

1. `$ cd yourApp`
1. `$ atom package.json`

```
"react-flexbox-grid": "git@github.com:falieson/react-flexbox-grid.git#responsive_hidden",
```


# react-flexbox-grid
[![npm version](https://badge.fury.io/js/react-flexbox-grid.svg)](https://badge.fury.io/js/react-flexbox-grid)
[![Build Status](https://travis-ci.org/roylee0704/react-flexbox-grid.svg)](https://travis-ci.org/roylee0704/react-flexbox-grid)
[![NPM Status](http://img.shields.io/npm/dm/react-flexbox-grid.svg?style=flat-square)](https://www.npmjs.org/package/react-flexbox-grid)


React-Flexbox-Grid is a set of React components that implement [flexboxgrid.css](https://goo.gl/imrHBZ). It's built on top of some the trendiest proposals like CSS Modules (written in SASS), Webpack and ES6. The library harmoniously integrates with your Webpack workflow and it's easily customizable and very flexible.


http://roylee0704.github.io/react-flexbox-grid/


Usage
-----

Although there are other ways to use React-Flexbox-Grid, the recommended way is to create a Webpack workflow with [Babel Loader](https://github.com/babel/babel-loader), [CSS Loader](https://github.com/webpack/css-loader) and [SASS Loader](https://github.com/jtangelder/sass-loader). A good starting point is [react-flexbox-grid-example](https://github.com/roylee0704/react-flexbox-grid-example), be sure to also checkout [webpack config](https://github.com/roylee0704/react-flexbox-grid-example/blob/master/webpack.config.js) in the example.



### Basic webpack configuration

You must configure webpack to load flexboxgrid with [CSS Modules](https://github.com/webpack/css-loader#css-modules), otherwise components from react-flexbox-grid will just have [empty class names](https://github.com/roylee0704/react-flexbox-grid/issues/21).

To do so, first add the loaders required as `devDependencies`:

```
npm i -D npm style-loader css-loader
```

Then configure the loaders:

```js
{
  test: /\.css$/,
  loader: 'style!css?modules',
  include: /flexboxgrid/,
}
```

If you have another loader which affects `flexboxgrid`, exclude it from that loader. In this case, also using `postcss` loader:

```js
{
  test: /\.css$/,
  loader: 'style!css!postcss',
  include: path.join(__dirname, 'node_modules'), // oops, this also includes flexboxgrid
  exclude: /flexboxgrid/, // so we have to exclude it
}
```

Because webpack stacks loaders together, it doesn't override them.

**Note:** If you need isomorphic support see https://github.com/roylee0704/react-flexbox-grid/issues/28#issuecomment-198758253.

Example
-------
Looking for example to use `react-flexbox-grid`? Head over to [react-flexbox-grid-example](https://github.com/roylee0704/react-flexbox-grid-example).


Installation
------------

React-Flexbox-Grid can be installed as an [npm package](https://www.npmjs.com/package/react-flexbox-grid):

```
npm i -S react-flexbox-grid
```

It has peer dependency requirements on `classnames` and `flexboxgrid` modules, which can be installed and added to the package manifest like so:

```
npm i -S classnames flexboxgrid
```

Once you have the workflow ready, you can just require and use the components:

```jsx
import React from 'react'
import { Grid } from 'react-flexbox-grid/lib/index'

React.render(<Grid />, document.querySelector('#main'))
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
[![Roy Lee](https://avatars0.githubusercontent.com/u/3850661?v=3&s=144)](https://github.com/roylee0704/) | [![Helder Santana](https://avatars1.githubusercontent.com/u/134727?v=3&s=144)](https://github.com/heldr/) | [![Matija Marohnić](https://avatars2.githubusercontent.com/u/471278?v=3&s=144)](https://github.com/silvenon)
---|---|---
[Roy Lee](https://github.com/roylee0704) | [Helder Santana](https://github.com/heldr/) | [Matija Marohnić](https://github.com/silvenon)

License
-------
MIT
