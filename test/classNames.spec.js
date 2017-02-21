import expect from 'expect';
import React from 'react';
import style from 'flexboxgrid';
import TestUtils from 'react-addons-test-utils';
import Col from '../src/components/Col';
import getClass, { setClassNameLookup } from '../src/classNames';

const renderer = TestUtils.createRenderer();

describe('classNames lookups', () => {
  it('translates known styles', () => {
    expect(getClass('col-xs')).toEqual(style['col-xs']);
  });
  it('falls back to returning unknown classnames', () => {
    expect(getClass('blah-blah-blah')).toEqual('blah-blah-blah');
  });
});
