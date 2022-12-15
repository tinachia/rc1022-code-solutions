import React from 'react';
import ReactDom from 'react-dom/client';
import HotButton from './hot-button';

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(<HotButton />);
root.render(<HotButton />);
