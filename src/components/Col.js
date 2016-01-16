import React, {Component, PropTypes} from 'react';
import style from 'flexboxgrid';

const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

export default class Col extends Component {

  constructor(props) {
    super(props);

    this._classMap = {
      xs: 'col-xs',
      sm: 'col-sm',
      md: 'col-md',
      lg: 'col-lg',
      xsOffset: 'col-xs-offset',
      smOffset: 'col-sm-offset',
      mdOffset: 'col-md-offset',
      lgOffset: 'col-lg-offset'
    };
  }

  render() {
    const classes = [];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.reverse) {
      classes.push(style.reverse);
    }

    for (const key in this.props) {
      if (this.props.hasOwnProperty(key) && this._classMap[key]) {
        let colBaseClass = this._classMap[key];
        colBaseClass = Number.isInteger(this.props[key]) ? (colBaseClass + '-' + this.props[key]) : colBaseClass;
        classes.push(style[colBaseClass]);
      }
    }

    return React.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: classes.join(' ')
    }), this.props.children);
  }
}

Col.propTypes = {
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
