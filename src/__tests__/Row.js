jest.dontMock('../Row');

describe('Row', () => {
  const React = require('react/addons');
  const {TestUtils} = React.addons;
  const Row = require('../Row');

  it('Should add "row" class', () => {
    const row = TestUtils.renderIntoDocument(<Row />);
    expect(row.getDOMNode().className).toEqual('row');
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const row = TestUtils.renderIntoDocument(<Row reverse={true} />);
    expect(row.getDOMNode().className).toContain('reverse');
  });

  it('Should not replace class', () => {
    const row = TestUtils.renderIntoDocument(<Row className="foo" />);
    const className = row.getDOMNode().className;
    expect(className).toContain('foo');
    expect(className).toContain('row');
  });

  it('Should add modificators', () => {
    const row = TestUtils.renderIntoDocument(
      <Row
        start="xs"
        center="sm"
        end="md"
        top="lg"
        middle="xs"
        bottom="sm"
        around="md"
        between="lg"
        first="xs"
        last="sm"
      />
    );
    const className = row.getDOMNode().className;

    expect(className).toContain('row');
    expect(className).toContain('start-xs');
    expect(className).toContain('center-sm');
    expect(className).toContain('end-md');
    expect(className).toContain('top-lg');
    expect(className).toContain('middle-xs');
    expect(className).toContain('bottom-sm');
    expect(className).toContain('around-md');
    expect(className).toContain('between-lg');
    expect(className).toContain('first-xs');
    expect(className).toContain('last-sm');
  });
});
