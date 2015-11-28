import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import style from '../style';

export default class Grid extends Component {
  render() {
    const containerClass = style[this.props.fluid ? 'container-fluid' : 'container'];
    const className = classNames(this.props.className, containerClass);
    return (
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    );
  }
}

Grid.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element
};
