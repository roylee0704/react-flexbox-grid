'use strict'; // eslint-disable-line

const context = require.context('./test', true, /.spec\.js$/);
context.keys().forEach(context);
