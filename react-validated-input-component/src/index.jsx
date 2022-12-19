import React from 'react';
import ReactDom from 'react-dom/client';
import ValidatedInput from './validated-input';

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<ValidatedInput />);
