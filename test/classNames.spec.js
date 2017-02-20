import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Col from '../src/components/Col';
import { setClassNameLookup } from '../src/classNames';

const renderer = TestUtils.createRenderer();

describe('classNames lookups', () => {
  afterEach(() => {
    setClassNameLookup();
  });

  it('Uses a custom className lookup function', () => {
    setClassNameLookup(name => `test-${name}`);
    renderer.render(<Col xs={12} sm={8} md={6} lg={4} />);
    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    expect(className).toContain('test-col-xs-12');
    expect(className).toContain('test-col-sm-8');
    expect(className).toContain('test-col-md-6');
    expect(className).toContain('test-col-lg-4');
  });
});
