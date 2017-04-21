import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Section = (props) => {
  return (
    <section className={style.section}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
};

export default Section;
