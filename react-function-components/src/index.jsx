import React from 'react';
import ReactDom from 'react-dom';

function CustomButton(prop) {
  return <button>Click Me!</button>;
}

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
const button = <CustomButton />;
root.render(button);
