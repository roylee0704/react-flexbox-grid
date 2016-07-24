import React, { PropTypes } from 'react';
import createProps from '../createProps';
import style from 'flexboxgrid';

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

const propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  reverse: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function getClassNames(props) {
  const extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.reverse) {
    extraClasses.push(style.reverse);
  }

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => style[Number.isInteger(props[key]) ? (classMap[key] + '-' + props[key]) : classMap[key]])
    .concat(extraClasses)
    .join(' ');
}

export default function Col(props) {
  const className = getClassNames(props);

  return React.createElement(props.tagName || 'div', createProps(propTypes, props, className));
}

Col.propTypes = propTypes;
