import React from 'react';
import PropTypes from 'prop-types';
import createProps from '../createProps';
import getClass from '../classNames';
import { ColumnSizeType, ViewportSizeType } from '../types';

const propTypes = {
  xs: ColumnSizeType,
  sm: ColumnSizeType,
  md: ColumnSizeType,
  lg: ColumnSizeType,
  xl: ColumnSizeType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  first: ViewportSizeType,
  last: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

const classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xl: 'col-xl',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xlOffset: 'col-xl-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  const extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push(getClass('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push(getClass('last-' + props.last));
  }

  return Object.keys(props)
    .filter(key => classMap[key])
    .map(key => getClass(isInteger(props[key]) ? (classMap[key] + '-' + props[key]) : classMap[key]))
    .concat(extraClasses);
}

export function getColumnProps(props) {
  return createProps(propTypes, props, getColClassNames(props));
}

export default function Col(props) {
  const { tagName, ...columnProps } = props;
  return React.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;
