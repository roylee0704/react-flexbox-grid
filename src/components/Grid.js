import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import cleanProps from '../cleanProps';
import style from 'flexboxgrid';

const propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  tagName: PropTypes.string,
  children: PropTypes.node
};

const propKeys = Object.keys(propTypes);

export default class Grid extends Component {
  render() {
    const containerClass = style[this.props.fluid ? 'container-fluid' : 'container'];
    const className = classNames(this.props.className, containerClass);

    const newProps = Object.assign({}, cleanProps(propKeys, this.props), { className });

    return React.createElement(this.props.tagName || 'div', newProps, this.props.children);
  }
}

Grid.propTypes = propTypes;
