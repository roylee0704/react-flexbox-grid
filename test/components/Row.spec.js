import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Row from '../../src/components/Row';
import style from 'flexboxgrid';

const renderer = TestUtils.createRenderer();

describe('Row', () => {
  it('Should add "row" class', () => {
    renderer.render(<Row />);
    expect(renderer.getRenderOutput().props.className).toEqual(style.row);
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    renderer.render(<Row reverse />);
    expect(renderer.getRenderOutput().props.className).toContain(style.reverse);
  });

  it('Should not replace class', () => {
    renderer.render(<Row className="foo" />);
    const { className } = renderer.getRenderOutput().props;
    expect(className).toContain('foo');
    expect(className).toContain(style.row);
  });

  it('Should add modificators', () => {
    renderer.render(
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
    const { className } = renderer.getRenderOutput().props;

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
    renderer.render(<Row tagName="ul" />);
    expect(renderer.getRenderOutput().type).toBe('ul');
  });
});
