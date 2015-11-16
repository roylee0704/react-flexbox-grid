react-flexBox-grid [![Circle CI](https://circleci.com/gh/roylee0704/react-flexbox-grid.svg?style=svg)](https://circleci.com/gh/roylee0704/react-flexbox-grid)
==============
React Component based on [flexboxgrid](https://goo.gl/imrHBZ)

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
