import React from 'react';
import ReactDom from 'react-dom/client';
import Stopwatch from './stopwatch';

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(<Stopwatch />);
