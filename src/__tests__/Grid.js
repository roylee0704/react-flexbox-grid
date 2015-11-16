jest.dontMock('../Grid');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Grid from '../Grid';

describe('Grid', () => {
  it('Should add "container" class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid />);
    expect(ReactDOM.findDOMNode(grid).className).toEqual('container');
  });

  it('Should not replace class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid className="foo" />);
    const className = ReactDOM.findDOMNode(grid).className;
    expect(className).toContain('foo');
    expect(className).toContain('container');
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const grid = TestUtils.renderIntoDocument(<Grid fluid={true} />);
    expect(ReactDOM.findDOMNode(grid).className).toEqual('container-fluid');
  });
});
