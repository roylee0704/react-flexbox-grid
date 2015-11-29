react-flexbox-grid [![Build Status](https://travis-ci.org/roylee0704/react-flexbox-grid.svg)](https://travis-ci.org/roylee0704/react-flexbox-grid) [![npm version](https://badge.fury.io/js/react-flexbox-grid.svg)](https://badge.fury.io/js/react-flexbox-grid)
==============


`React Flexbox Grid` is a set of React components that implement [flexboxgrid.css](https://goo.gl/imrHBZ). It's powered by CSS Modules and harmoniously integrates with your Webpack workflow. You can take a tour through our documentation website and try the components live!


Installation
------------

React Toolbox can be installed as an [npm package](https://www.npmjs.com/package/react-flexbox-grid);

```
npm install react-flexbox-grid
```

Usage
-----

Although there are other ways to use React Toolbox, the recommended way is to create a Webpack workflow with [Babel Loader](https://github.com/babel/babel-loader), [CSS Loader](https://github.com/webpack/css-loader) and [SASS Loader](https://github.com/jtangelder/sass-loader). A good starting point is [React Hot Webpack Boilerplate](https://github.com/gaearon/react-hot-boilerplate)


Once you have the workflow ready, you can just require and use the components:

```jsx
import React from `react`;
import {Container} from `react-flexbox-grid/lib/index`;

React.render(<Container />, document.querySelector('#main'));
```

The previous code creates a React container component based on `React Flexbox Grid` container. It's important to notice that requiring a module from the exposed root of the package will import the **SASS** of the component.


I encourage you to work with webpack but if you want to use `React Flexbox Grid` in an old fashioned way, you must generate a build with all the css and javascript and include it in your `index.html`. Then you can use the components exposed in the `window` object.


Then, import `flexboxgrid` in the entry-point of your application.


More example
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

License
-------
MIT
