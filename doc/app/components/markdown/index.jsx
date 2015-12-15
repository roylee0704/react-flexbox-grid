import React from 'react';
import style from './style';


const Markdown = (props) => {
  const className = style.markdown;
  const html = {
    __html: props.html
  };

  return (
    <article className={className} dangerouslySetInnerHTML = {html} />
  );
};

Markdown.propTypes = {
  html: React.PropTypes.string
};

export default Markdown;
