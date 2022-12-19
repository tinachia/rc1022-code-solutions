import React from 'react';
import ReactDom from 'react-dom/client';
import AppDrawer from './app-drawer';

const container = document.querySelector('#root');
const root = ReactDom.createRoot(container);
root.render(<AppDrawer />);
