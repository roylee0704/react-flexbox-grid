react-flexbox-grid [![Circle CI](https://circleci.com/gh/roylee0704/react-flexbox-grid.svg?style=svg)](https://circleci.com/gh/roylee0704/react-flexbox-grid)
==============
React Component based on [flexboxgrid](https://goo.gl/imrHBZ)

It is written in ES6 and requires an ES6 to ES5 transpiler. If there is need for it I can add a transpiled version to the repo.


Installation
------------

```
npm install react-flexbox-grid
```

Usage
-----

Require `lib/flexgrid.css`, or `less/flexgrid.less` into your project.

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
