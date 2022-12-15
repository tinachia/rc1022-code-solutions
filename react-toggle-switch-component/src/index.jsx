import React from 'react';
import ReactDom from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);

root.render(<ToggleSwitch />);
