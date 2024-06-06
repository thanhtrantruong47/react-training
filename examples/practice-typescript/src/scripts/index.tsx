import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import React from 'react';

const NavigationBar = () => {
  return <h1>Hello from React!</h1>;
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <>
    <StrictMode>
      <NavigationBar />
    </StrictMode>
  </>
);
