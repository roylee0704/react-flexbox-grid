import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Col from '../../src/components/Col';
import style from 'flexboxgrid';

describe('Col', () => {
  it('Should add classes equals to props', () => {
    const col = TestUtils.renderIntoDocument(<Col xs={12} sm={8} md={6} lg={4} />);
    const className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain(style['col-xs-12']);
    expect(className).toContain(style['col-sm-8']);
    expect(className).toContain(style['col-md-6']);
    expect(className).toContain(style['col-lg-4']);
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const col = TestUtils.renderIntoDocument(<Col reverse/>);
    expect(ReactDOM.findDOMNode(col).className).toContain(style.reverse);
  });

  it('Should not replace class', () => {
    const col = TestUtils.renderIntoDocument(<Col className="foo" md={3} />);
    const className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain('foo');
    expect(className).toContain(style['col-md-3']);
  });

  it('Should support auto-width', () => {
    const col = TestUtils.renderIntoDocument(<Col xs sm md lg />);
    const className = ReactDOM.findDOMNode(col).className;
    expect(className).toContain(style['col-xs']);
    expect(className).toContain(style['col-sm']);
    expect(className).toContain(style['col-md']);
    expect(className).toContain(style['col-lg']);
  });

  it('Should support custom tag name', () => {
    const col = TestUtils.renderIntoDocument(<Col xs sm md lg tagName="li" />);
    const { tagName } = ReactDOM.findDOMNode(col);

    expect(tagName).toBe('LI');
  });
});
