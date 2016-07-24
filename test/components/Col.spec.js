import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Col from '../../src/components/Col';
import style from 'flexboxgrid';

const renderer = TestUtils.createRenderer();

describe('Col', () => {
  it('Should add classes equals to props', () => {
    renderer.render(<Col xs={12} sm={8} md={6} lg={4} />);
    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    expect(className).toContain(style['col-xs-12']);
    expect(className).toContain(style['col-sm-8']);
    expect(className).toContain(style['col-md-6']);
    expect(className).toContain(style['col-lg-4']);
  });

  it('Should add "reverse" class if "reverse" property is true', () => {
    renderer.render(<Col reverse/>);
    expect(renderer.getRenderOutput().props.className).toContain(style.reverse);
  });

  it('Should not replace class', () => {
    renderer.render(<Col className="foo" md={3} />);

    const { className } = renderer.getRenderOutput().props;

    expect(className).toContain('foo');
    expect(className).toContain(style['col-md-3']);
  });

  it('Should support auto-width', () => {
    renderer.render(<Col xs sm md lg />);
    const { className } = renderer.getRenderOutput().props;
    expect(className).toContain(style['col-xs']);
    expect(className).toContain(style['col-sm']);
    expect(className).toContain(style['col-md']);
    expect(className).toContain(style['col-lg']);
  });

  it('Should support custom tag name', () => {
    renderer.render(<Col xs sm md lg tagName="li" />);

    expect(renderer.getRenderOutput().type).toBe('li');
  });
});
