jest.dontMock('../Grid');

describe('Grid', () => {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;
  const Grid = require('../Grid');

  it('Should add "container" class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid />);
    expect(grid.getDOMNode().className).toEqual('container');
  });

  it('Should not replace class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid className="foo" />);
    const className = grid.getDOMNode().className;
    expect(className).toContain('foo');
    expect(className).toContain('container');
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const grid = TestUtils.renderIntoDocument(<Grid fluid={true} />);
    expect(grid.getDOMNode().className).toEqual('container-fluid');
  });
});
