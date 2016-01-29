/* global VERSION */
require('./stylesheets/base');
import box from './stylesheets/modules/box';

import React from 'react';
import {Grid, Row, Col} from '../src/index';

const Root = () => (
  <div>
    <h1>React Flexbox Grid <small>Spec {VERSION}</small></h1>
    <Grid>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>
          <div className={box.row} />
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          <div className={box.row} />
        </Col>
        <Col xs={6} sm={3} md={2} lg={1}>
          <div className={box.row} />
        </Col>
      </Row>
    </Grid>
  </div>
);


export default Root;
