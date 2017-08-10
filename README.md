# react-flexbox-grid
[![npm version](https://badge.fury.io/js/react-flexbox-grid.svg)](https://badge.fury.io/js/react-flexbox-grid)
[![Build Status](https://travis-ci.org/roylee0704/react-flexbox-grid.svg)](https://travis-ci.org/roylee0704/react-flexbox-grid)
[![NPM Status](http://img.shields.io/npm/dm/react-flexbox-grid.svg?style=flat)](https://www.npmjs.org/package/react-flexbox-grid)


`react-flexbox-grid` is a set of React components that implement [flexboxgrid.css](https://goo.gl/imrHBZ). It even has an optional support for [CSS Modules](https://github.com/webpack-contrib/css-loader#css-modules) with some extra configuration.


**http://roylee0704.github.io/react-flexbox-grid/**


Setup
-----

### Installation

`react-flexbox-grid` can be installed as an [npm package](https://www.npmjs.com/package/react-flexbox-grid):

```
npm install --save react-flexbox-grid
```

### Minimal configuration

The recommended way to use `react-flexbox-grid` is with a tool like [webpack](https://webpack.js.org/) or [Meteor](https://www.meteor.com/), make sure you set it up to support requiring CSS files. For example, the minimum required loader configuration for webpack would look like this:

```js
{
  test: /\.css$/,
  loader: 'style-loader!css-loader',
  include: /flexboxgrid/
}
```

`react-flexbox-grid` imports the styles from `flexboxgrid`, that's why we're configuring the loader for it.

### CSS Modules

If you want to use CSS Modules (this is _mandatory_ for versions earlier than v1), webpack's [`css-loader`](https://github.com/webpack-contrib/css-loader) supports this by passing `modules` param in the loader configuration.

First, install `style-loader` and `css-loader` as development dependencies:

```
npm install --save-dev style-loader css-loader
```

Next, add a loader for `flexboxgrid` with CSS Modules enabled:

```js
{
  test: /\.css$/,
  loader: 'style-loader!css-loader?modules',
  include: /flexboxgrid/
}
```

Make sure you don't have another CSS loader which also affects `flexboxgrid`. In case you do, exclude `flexboxgrid`, for example:

```js
{
  test: /\.css$/,
  loader: 'style-loader!css-loader!postcss-loader',
  include: path.join(__dirname, 'node_modules'), // oops, this also includes flexboxgrid
  exclude: /flexboxgrid/ // so we have to exclude it
}
```

Otherwise you would end up with an [obscure error](https://github.com/roylee0704/react-flexbox-grid/issues/94#issuecomment-282825720) because webpack stacks loaders together, it doesn't override them.

### Isomorphic support

Try: [this comment](https://github.com/roylee0704/react-flexbox-grid/issues/28#issuecomment-198758253).

If this doesn't work for you, use the build located in the dist directory. This build removes all `.css` imports and extracts the relevant css into `react-flexbox-grid/dist/react-flexbox-grid.css`.

### Not using a bundler?

Use the pre-bundled build located in the dist directory. It contains a single umd js distributable and built css file.

Usage
-----

Now you can import and use the components:

```jsx
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}
```

### Gotcha

For the time being always use `fluid` for `<Grid>` to prevent [horizontal overflow issues](https://github.com/kristoferjoseph/flexboxgrid/issues/144).


Example
-------
Looking for a complete example? Head over to [react-flexbox-grid-example](https://github.com/roylee0704/react-flexbox-grid-example).


Advanced composition
-------

We also export functions for generating Row and Column class names for use in other components.

For example, suppose you're using a third party component that accepts `className` and you would like it to be rendered as `Col`.  You could do so by extracting the column sizing props that `MyComponent` uses and then pass the generated className on to `SomeComponent`


```jsx
import React from 'react';
import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';
// a component that accepts a className
import SomeComponent from 'some-package';

export default function MyComponent(props) {
  const colProps = getColumnProps(props);
  const rowProps = getRowProps(props);

  return (
    <form className={rowProps.className}>
      <SomeComponent classname={colProps.className} />
      <input value={props.value} onChange={props.onChange} />
    </form>
  );
}

MyComponent.propTypes = Object.assign({
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
}, Col.propTypes, Row.propTypes);  // Re-use existing Row and Col propType validations

// Can now be rendered as: <MyComponent end="sm" sm={8} value="my input value" onChange={...} />
```

Contributors
-----------
[![Roy Lee](https://avatars0.githubusercontent.com/u/3850661?v=3&s=144)](https://github.com/roylee0704/) | [![Helder Santana](https://avatars1.githubusercontent.com/u/134727?v=3&s=144)](https://github.com/heldr/) | [![Matija Marohnić](https://avatars2.githubusercontent.com/u/471278?v=3&s=144)](https://github.com/silvenon)
---|---|---
[Roy Lee](https://github.com/roylee0704) | [Helder Santana](https://github.com/heldr/) | [Matija Marohnić](https://github.com/silvenon)

License
-------
MIT
