import expect from 'expect';
import React from 'react';
import style from 'flexboxgrid';
import TestUtils from 'react-addons-test-utils';
import Col from '../src/components/Col';
import getClass, { setClassNameLookup } from '../src/classNames';

const renderer = TestUtils.createRenderer();

describe('classNames lookups', () => {
  afterEach(() => {
    setClassNameLookup();
  });
  it('translates known styles', () => {
    expect(getClass('col-xs')).toEqual(style['col-xs']);
  });
  it('falls back to returning unknown classnames', () => {
    expect(getClass('blah-blah-blah')).toEqual('blah-blah-blah');
  });
  it('cn use a custom className lookup function', () => {
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
