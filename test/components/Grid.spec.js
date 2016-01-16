import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Grid from '../../src/components/Grid';
import style from 'flexboxgrid';


describe('Grid', () => {
  it('Should add "container" class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid />);
    expect(ReactDOM.findDOMNode(grid).className).toEqual(style.container);
  });

  it('Should not replace class', () => {
    const grid = TestUtils.renderIntoDocument(<Grid className="foo" />);
    const className = ReactDOM.findDOMNode(grid).className;
    expect(className).toContain('foo');
    expect(className).toContain(style.container);
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    const grid = TestUtils.renderIntoDocument(<Grid fluid />);
    expect(ReactDOM.findDOMNode(grid).className).toEqual(style['container-fluid']);
  });

  it('Should support custom tag name', () => {
    const col = TestUtils.renderIntoDocument(<Grid tagName="section" />);
    const { tagName } = ReactDOM.findDOMNode(col);

    expect(tagName).toBe('SECTION');
  });
});
