/// <reference path="../react-flexbox-grid.d.ts" />

import {Grid, Row, Col} from "react-flexbox-grid";
import * as React from "react";

const ex1: JSX.Element = (
  <Grid>
    <Row>
      <Col xs={6} md={3}>Hello, world!</Col>
    </Row>
  </Grid>
);

const ex2: JSX.Element = (
  <Row>
    <Col xsOffset={11} xs={1}/>
    <Col xsOffset={10} xs={2}/>
    <Col xsOffset={9} xs={3}/>
    <Col xsOffset={8} xs={4}/>
    <Col xsOffset={7} xs={5}/>
    <Col xsOffset={6} xs={6}/>
    <Col xsOffset={5} xs={7}/>
    <Col xsOffset={4} xs={8}/>
    <Col xsOffset={3} xs={9}/>
    <Col xsOffset={2} xs={10}/>
    <Col xsOffset={1} xs={11}/>
  </Row>
);

const ex3: JSX.Element = (
  <Row>
    <Col xs={12} sm={3} md={2} lg={1}/>
    <Col xs={6} sm={6} md={8} lg={10}/>
    <Col xs={6} sm={3} md={2} lg={1}/>
  </Row>
);

const ex4: JSX.Element = (
  <Grid>
    <Row>
      <Col xs/>
      <Col xs/>
    </Row>
    <Row>
      <Col xs/>
      <Col xs/>
      <Col xs/>
    </Row>
  </Grid>
);


const ex5: JSX.Element = (
  <Row>
    <Col xs={12}>
      <Row start="xs">
        <Col xs={6} />
      </Row>
    </Col>
  </Row>
);
