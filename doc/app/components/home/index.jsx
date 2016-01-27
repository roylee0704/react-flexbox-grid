import React from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import home from './style';

import Markdown from '../markdown';
import Hero from '../hero';
import Section from '../section';
import Box from '../box';

import responsiveMD from './responsive';
import fluidMD from './fluid';
import offsetMD from './offset';
import autoWidthMD from './auto-width';
import alignStartMD from './align-start';
import alignCenterMD from './align-center';
import alignEndMD from './align-end';
import alignTopMD from './align-top';
import alignMiddleMD from './align-middle';
import alignBottomMD from './align-bottom';
import distAroundMD from './dist-around';
import distBetweenMD from './dist-between';

const Home = () => (
  <article>
    <Hero />
    <Grid fluid className={home.wrap}>
      <Section
        title="Responsive"
        description="Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.">
        <Row>
          <Box type="row" xs={12} sm={3} md={2} lg={1} />
          <Box type="row" xs={6} sm={6} md={8} lg={10} />
          <Box type="row" xs={6} sm={3} md={2} lg={1} />
        </Row>
        <Row>
          <Box type="row" xs={12} sm={3} md={2} lg={1} />
          <Box type="row" xs={12} sm={9} md={10} lg={11} />
        </Row>
        <Row>
          <Box type="row" xs={10} sm={6} md={8} lg={10} />
          <Box type="row" xs={2} sm={6} md={4} lg={2} />
        </Row>
        <Row>
          <Markdown html = {responsiveMD} />
        </Row>
      </Section>
      <Section title = "Fluid" description = "Percent based width allow fluid resizing of columns and rows.">
        <Row>
          <Box type="row" xs={12} sm={3} md={2} lg={1} />
          <Box type="row" xs={6} sm={6} md={8} lg={10} />
          <Box type="row" xs={6} sm={3} md={2} lg={1} />
        </Row>
        <Row>
          <Box type="row" xs={12} sm={3} md={2} lg={1} />
          <Box type="row" xs={12} sm={9} md={10} lg={11} />
        </Row>
        <Row>
          <Box type="row" xs={10} sm={6} md={8} lg={10} />
          <Box type="row" xs={2} sm={6} md={4} lg={2} />
        </Row>
        <Row>
          <Markdown html = {fluidMD} />
        </Row>
      </Section>
      <Section title = "Offsets" description = "Offset a column.">
        <Row>
          <Box type="row" xsOffset={11} xs={1} />
          <Box type="row" xsOffset={10} xs={2} />
          <Box type="row" xsOffset={9} xs={3} />
          <Box type="row" xsOffset={8} xs={4} />
          <Box type="row" xsOffset={7} xs={5} />
          <Box type="row" xsOffset={6} xs={6} />
          <Box type="row" xsOffset={5} xs={7} />
          <Box type="row" xsOffset={4} xs={8} />
          <Box type="row" xsOffset={3} xs={9} />
          <Box type="row" xsOffset={2} xs={10} />
          <Box type="row" xsOffset={1} xs={11} />
        </Row>
        <Row>
          <Markdown html = {offsetMD} />
        </Row>
      </Section>
      <Section title = "Auto Width" description = "Add any number of auto sizing columns to a row. Let the grid figure it out.">
        <Row>
          <Box type="row" xs />
          <Box type="row" xs />
        </Row>
        <Row>
          <Box type="row" xs />
          <Box type="row" xs />
          <Box type="row" xs />
        </Row>
        <Row>
          <Markdown html = {autoWidthMD} />
        </Row>
      </Section>
      <Section title = "Alignment" description = "Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column">
        <h3><code>.start-</code></h3>
        <Row>
          <Box type="container" xs={12}>
            <Row start="xs">
              <Box type="nested" xs={6} />
            </Row>
          </Box>
        </Row>
        <Row>
          <Markdown html = {alignStartMD} />
        </Row>
        <h3><code>.center-</code></h3>
        <Row>
          <Box type="container" xs={12}>
            <Row center="xs">
              <Box type="nested" xs={6} />
            </Row>
          </Box>
        </Row>
        <Row>
          <Markdown html = {alignCenterMD} />
        </Row>
        <h3><code>.end-</code></h3>
        <Row>
          <Box type="container" xs={12}>
            <Row end="xs">
              <Box type="nested" xs={6} />
            </Row>
          </Box>
        </Row>
        <Row>
          <Markdown html = {alignEndMD} />
        </Row>
        <h3><code>.top-</code></h3>
        <Row top="xs">
          <Box type="large" xs={6} />
          <Box xs={6} />
        </Row>
        <Row>
          <Markdown html = {alignTopMD} />
        </Row>
        <h3><code>.middle-</code></h3>
        <Row middle="xs">
          <Box type="large" xs={6} />
          <Box xs={6} />
        </Row>
        <Row>
          <Markdown html = {alignMiddleMD} />
        </Row>
        <h3><code>.bottom-</code></h3>
        <Row bottom="xs">
          <Box type="large" xs={6} />
          <Box xs={6} />
        </Row>
        <Row>
          <Markdown html = {alignBottomMD} />
        </Row>
      </Section>
      <Section title = "Distribution" description = "Add classes to distribute the contents of a row or column.">
        <h3><code>.around-</code></h3>
        <Row>
          <Box type="container" xs={12}>
            <Row around="xs">
              <Box type="nested" xs={2} />
              <Box type="nested" xs={2} />
              <Box type="nested" xs={2} />
            </Row>
          </Box>
        </Row>
        <Row>
          <Markdown html = {distAroundMD} />
        </Row>
        <h3><code>.between-</code></h3>
        <Row>
          <Box type="container" xs={12}>
            <Row between="xs">
              <Box type="nested" xs={2} />
              <Box type="nested" xs={2} />
              <Box type="nested" xs={2} />
            </Row>
          </Box>
        </Row>
        <Row>
          <Markdown html = {distBetweenMD} />
        </Row>
      </Section>
    </Grid>
  </article>
);

export default Home;
