import React from 'react';
import * as ReactDom from 'react-dom';

const h1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log(h1);

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(h1);
