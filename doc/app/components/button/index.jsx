import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Button = (props) => {
  return (
    <a className={style.button} href={props.url}>{props.children}</a>
  );
};

Button.propTypes = {
  url: PropTypes.string,
  children: PropTypes.string
};

export default Button;
