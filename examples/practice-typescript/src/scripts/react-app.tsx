import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import SideBar from 'components/SideBar/SideBar';

const domNode = document.getElementById('react-app');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <SideBar />
  </StrictMode>
);
