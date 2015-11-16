React Flexgrid
==============

[![Circle CI](https://circleci.com/gh/nkt/react-flexgrid.svg?style=svg)](https://circleci.com/gh/nkt/react-flexgrid)

Installation
------------

```
npm install react-flexgrid
```

Usage
-----

Require `lib/flexgrid.css`, or `less/flexgrid.less` into your project.

```jsx
const {Grid, Row, Col} = require('react-flexgrid');

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
