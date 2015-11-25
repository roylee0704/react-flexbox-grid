react-flexbox-grid [![Circle CI](https://circleci.com/gh/roylee0704/react-flexbox-grid.svg?style=svg)](https://circleci.com/gh/roylee0704/react-flexbox-grid) [![npm version](https://badge.fury.io/js/react-flexbox-grid.svg)](https://badge.fury.io/js/react-flexbox-grid)
==============
React Component based on [flexboxgrid](https://goo.gl/imrHBZ)

It is written in ES6 and requires an ES6 to ES5 transpiler. If there is need for it I can add a transpiled version to the repo.


Installation
------------

```
npm install react-flexbox-grid
```


Pre-requisite
-------------

First, make sure you have [flexboxgrid](https://goo.gl/imrHBZ) installed.

```sh
npm install flexboxgrid
```

Then, import `flexboxgrid` in the entry-point of your application.

```jsx
import 'flexboxgrid'
import React from 'react'
import Container from 'javascripts/container'

React.render(<Container />, document.querySelector('#main'))
```

Usage
-----

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
