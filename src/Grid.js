const React = require('react');
const classNames = require('classnames');

const Grid = React.createClass({
  propTypes: {
    fluid: React.PropTypes.bool
  },
  render() {
    const containerClass = this.props.fluid ? 'container-fluid' : 'container';
    const className = classNames(this.props.className, containerClass);

    return (
      <div {...this.props} className={className}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Grid;
