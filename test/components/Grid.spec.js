import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Grid from '../../src/components/Grid';
import style from 'flexboxgrid';

const renderer = TestUtils.createRenderer();

describe('Grid', () => {
  it('Should add "container" class', () => {
    renderer.render(<Grid />);
    expect(renderer.getRenderOutput().props.className).toEqual(style.container);
  });

  it('Should not replace class', () => {
    renderer.render(<Grid className="foo" />);
    const { className } = renderer.getRenderOutput().props;

    expect(className).toContain('foo');
    expect(className).toContain(style.container);
  });

  it('Should add "container-fluid" class if "fluid" property is true', () => {
    renderer.render(<Grid fluid />);
    expect(renderer.getRenderOutput().props.className).toEqual(style['container-fluid']);
  });

  it('Should support custom tag name', () => {
    renderer.render(<Grid tagName="section" />);
    expect(renderer.getRenderOutput().type).toBe('section');
  });
});
