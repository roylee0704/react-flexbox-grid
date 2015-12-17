import React from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import home from './style';

import Markdown from '../markdown';
import Section from '../section';
import Box from '../box';

import responsiveMD from './responsive';
import fluidMD from './fluid';
import offsetMD from './offset';
import autoWidthMD from './auto-width';


const Home = () => (
  <article>
    <header>
      <Row center="xs">
        <h1 className={home.headline}>React-FlexBox-Grid</h1>
      </Row>
      <Row center="xs">
        <p></p>
      </Row>
      <Row center="xs">
        <a href="https://github.com/roylee0704/react-flexbox-grid">Github</a>
      </Row>
    </header>
    <Grid fluid className={home.wrap}>
      <Section
        title="Responsive"
        description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.">
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
      </Section>
      <Section title = "Fluid" description = "Percent based width allow fluid resizing of columns and rows.">
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
          <Markdown html = {fluidMD} />
        </Row>
      </Section>
      <Section title = "Offsets" description = "Offset a column.">
        <Row>
          <Box xsOffset={11} xs={1} />
          <Box xsOffset={10} xs={2} />
          <Box xsOffset={9} xs={3} />
          <Box xsOffset={8} xs={4} />
          <Box xsOffset={7} xs={5} />
          <Box xsOffset={6} xs={6} />
          <Box xsOffset={5} xs={7} />
          <Box xsOffset={4} xs={8} />
          <Box xsOffset={3} xs={9} />
          <Box xsOffset={2} xs={10} />
          <Box xsOffset={1} xs={11} />
        </Row>
        <Row>
          <Markdown html = {offsetMD} />
        </Row>
      </Section>
      <Section title = "Auto Width" description = "Add any number of auto sizing columns to a row. Let the grid figure it out.">
        <Row>
          <Box xs />
          <Box xs />
        </Row>
        <Row>
          <Box xs />
          <Box xs />
          <Box xs />
        </Row>
        <Row>
          <Markdown html = {autoWidthMD} />
        </Row>
      </Section>
    </Grid>
  </article>
);

export default Home;
