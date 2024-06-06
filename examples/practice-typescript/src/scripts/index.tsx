import React from 'react';
import { createRoot } from 'react-dom/client';

const NavigationBar = () => {
  return <h1>Hello from React!</h1>;
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<NavigationBar />);
