import React from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import home from './style';

import Markdown from '../markdown';
import Section from '../section';
import Box from '../box';
import responsiveMD from './responsive';

const Home = () => (
  <article>
    <header>
      <Row center="xs">
        <h1 className={home.headline}>React-FlexBox-Grid</h1>
      </Row>
      <Row center="xs">
        <p>A react grid system based on flexboxgrid.css</p>
      </Row>
      <Row center="xs">
        <a href="https://github.com/roylee0704/react-flexbox-grid">Github</a>
      </Row>
  </header>
  <Grid fluid className={home.wrap}>
    <Section
      title="Responsive"
      description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths." />
    <Row>
      <Box xs={12} sm={3} md={2} lg={1} />
      <Box xs={6} sm={6} md={8} lg={10} />
      <Box xs={6} sm={3} md={2} lg={1} />
    </Row>
    <Row>
      <Box xs={12} sm={3} md={2} lg={1} />
      <Box xs={12} sm={9} md={10} lg={11} />
    </Row>
    <Row>
      <Box xs={10} sm={6} md={8} lg={10} />
      <Box xs={2} sm={6} md={4} lg={2} />
    </Row>
    <Row>
      <Markdown html = {responsiveMD} />
    </Row>
  </Grid>
  </article>
);

export default Home;
