import expect from 'expect';
import style from 'flexboxgrid';
import getClass from '../src/classNames';

describe('classNames lookups', () => {
  it('translates known styles', () => {
    expect(getClass('col-xs')).toEqual(style['col-xs']);
  });
  it('falls back to returning unknown classnames', () => {
    expect(getClass('blah-blah-blah')).toEqual('blah-blah-blah');
  });
});
