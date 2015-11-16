jest.dontMock('../Col');

describe('Col', () => {
  const React = require('react/addons');
  const TestUtils = React.addons.TestUtils;
  const Col = require('../Col');

  it('Should add classes equals to props', () => {
    let col = TestUtils.renderIntoDocument(<Col xs={12} sm={8} md={6} lg={4} />);
    let className = col.getDOMNode().className;
    expect(className).toContain('col-xs-12');
    expect(className).toContain('col-sm-8');
    expect(className).toContain('col-md-6');
    expect(className).toContain('col-lg-4');
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    let col = TestUtils.renderIntoDocument(<Col reverse={true} />);
    expect(col.getDOMNode().className).toContain('reverse');
  });

  it('Should not replace class', () => {
    let col = TestUtils.renderIntoDocument(<Col className="foo" md={3} />);
    let className = col.getDOMNode().className;
    expect(className).toContain('foo');
    expect(className).toContain('col-md-3');
  });
});
