import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import cleanProps from '../cleanProps';
import style from 'flexboxgrid';

const ModificatorType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

const propTypes = {
  reverse: PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

const propKeys = Object.keys(propTypes);

export default class Row extends Component {

  render() {
    const modificators = [style.row];
    for (let i = 0; i < modificatorKeys.length; ++i) {
      const key = modificatorKeys[i];
      const value = this.props[key];
      if (value) {
        modificators.push(style[`${key}-${value}`]);
      }
    }

    if (this.props.reverse) {
      modificators.push(style.reverse);
    }

    const className = classNames(this.props.className, modificators);

    const newProps = Object.assign({}, cleanProps(propKeys, this.props), { className });

    return React.createElement(this.props.tagName || 'div', newProps, this.props.children);
  }
}

Row.propTypes = propTypes;
