import { PropTypes } from 'react';

export const ColumnSizeType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
export const ViewportSizeType = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
