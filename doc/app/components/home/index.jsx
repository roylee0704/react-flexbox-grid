import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import style from './style';

import Markdown from '../markdown';
import responsiveMD from './responsive';

const Home = () => (
  <article>
    <header>
      <Row center="xs">
        <h1 className={style.headline}>React-FlexBox-Grid</h1>
      </Row>
      <Row center="xs">
        <p>A react grid system based on flexboxgrid.css</p>
      </Row>
      <Row center="xs">
        <a href="https://github.com/roylee0704/react-flexbox-grid">Github</a>
      </Row>
  </header>
  <section>
    <Grid fluid>
      <h2>Responsive</h2>
      <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.</p>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>
          <div className={style.box} />
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          <div className={style.box} />
        </Col>
        <Col xs={6} sm={3} md={2} lg={1}>
          <div className={style.box} />
        </Col>
      </Row>
      <Row>
        <Col xs={2} sm={3} md={2} lg={1}>
          <div className={style.box} />
        </Col>
        <Col xs={2} sm={9} md={10} lg={11}>
          <div className={style.box} />
        </Col>
      </Row>
      <Row>
        <Col xs={10} sm={6} md={8} lg={10}>
          <div className={style.box} />
        </Col>
        <Col xs={2} sm={6} md={4} lg={2}>
          <div className={style.box} />
        </Col>
      </Row>

        <Markdown html = {responsiveMD} />
    </Grid>

  </section>

  </article>
);

export default Home;
