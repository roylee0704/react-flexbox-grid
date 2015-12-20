import React, {PropTypes} from 'react';
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
