import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './app';

const domNode = document.getElementById('app-component');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
