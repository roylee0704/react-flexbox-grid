import React, {PropTypes} from 'react';

const Section = (props) => {
  return (
    <section>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Section;
