import React from 'react';
import {Row} from 'react-flexbox-grid';
import style from './style';

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
  </article>
);

export default Home;
