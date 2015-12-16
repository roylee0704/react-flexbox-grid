import React from 'react';
import {Col} from 'react-flexbox-grid';
import box from './style';

const Box = (props) => {
  return (
  <Col {...props}>
      <div className={box.row} />
    </Col>
  );
};

export default Box;
