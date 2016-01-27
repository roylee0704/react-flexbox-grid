import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Row from '../../src/components/Row';
import style from 'flexboxgrid';

describe('Row', () => {
  it('Should add "row" class', () => {
    const row = TestUtils.renderIntoDocument(<Row />);
    expect(ReactDOM.findDOMNode(row).className).toEqual(style.row);
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    const row = TestUtils.renderIntoDocument(<Row reverse />);
    expect(ReactDOM.findDOMNode(row).className).toContain(style.reverse);
  });

  it('Should not replace class', () => {
    const row = TestUtils.renderIntoDocument(<Row className="foo" />);
    const className = ReactDOM.findDOMNode(row).className;
    expect(className).toContain('foo');
    expect(className).toContain(style.row);
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
    const className = ReactDOM.findDOMNode(row).className;

    expect(className).toContain(style.row);
    expect(className).toContain(style['start-xs']);
    expect(className).toContain(style['center-sm']);
    expect(className).toContain(style['end-md']);
    expect(className).toContain(style['top-lg']);
    expect(className).toContain(style['middle-xs']);
    expect(className).toContain(style['bottom-sm']);
    expect(className).toContain(style['around-md']);
    expect(className).toContain(style['between-lg']);
    expect(className).toContain(style['first-xs']);
    expect(className).toContain(style['last-sm']);
  });

  it('Should support custom tag name', () => {
    const col = TestUtils.renderIntoDocument(<Row tagName="ul" />);
    const { tagName } = ReactDOM.findDOMNode(col);

    expect(tagName).toBe('UL');
  });
});
