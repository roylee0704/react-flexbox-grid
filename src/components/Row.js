import getClass from '../classNames';
import React, { PropTypes } from 'react';
import createProps from '../createProps';
import { ViewportSizeType } from '../types';

const rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

const propTypes = {
  reverse: PropTypes.bool,
  start: ViewportSizeType,
  center: ViewportSizeType,
  end: ViewportSizeType,
  top: ViewportSizeType,
  middle: ViewportSizeType,
  bottom: ViewportSizeType,
  around: ViewportSizeType,
  between: ViewportSizeType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

function getClassNames(props) {
  const modificators = [props.className, getClass('row')];

  for (let i = 0; i < rowKeys.length; ++i) {
    const key = rowKeys[i];
    const value = props[key];
    if (value) {
      modificators.push(getClass(`${key}-${value}`));
    }
  }

  if (props.reverse) {
    modificators.push(getClass('reverse'));
  }

  return modificators;
}

export default function Row(props) {
  return React.createElement(props.tagName || 'div', createProps(propTypes, props, getClassNames(props)));
}

Row.propTypes = propTypes;
