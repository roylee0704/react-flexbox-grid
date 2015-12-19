import React, {PropTypes} from 'react';
import {Col} from 'react-flexbox-grid';
import box from './style';

const Box = (props) => {
  return (
    <Col {...props}>
        <div className = {box[props.type]}>
          {props.children}
        </div>
    </Col>
  );
};

Box.propTypes = {
  type: PropTypes.oneOf(['row', 'container', 'nested']).isRequired,
  children: PropTypes.node
};

export default Box;
