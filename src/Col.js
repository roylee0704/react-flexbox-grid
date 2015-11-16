const React = require('react');

const Col = React.createClass({
  propTypes: {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    reverse: React.PropTypes.bool
  },
  _classMap: {
    xs: 'col-xs-',
    sm: 'col-sm-',
    md: 'col-md-',
    lg: 'col-lg-',
    xsOffset: 'col-xs-offset-',
    smOffset: 'col-sm-offset-',
    mdOffset: 'col-md-offset-',
    lgOffset: 'col-lg-offset-'
  },
  render() {
    let classes = [];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    if (this.props.reverse) {
      classes.push('reverse');
    }

    for (let key in this.props) {
      if (this.props.hasOwnProperty(key) && this._classMap[key]) {
        classes.push(this._classMap[key] + this.props[key]);
      }
    }

    return React.createElement('div', Object.assign({}, this.props, {
      className: classes.join(' ')
    }), this.props.children);
  }
});

module.exports = Col;
