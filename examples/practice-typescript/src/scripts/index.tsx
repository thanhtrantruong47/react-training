import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Logo from 'components/Logo/Logo';
import SideBarMenu from 'components/SideBarMenu/SideBarMenu';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <Logo />
    <SideBarMenu active="Product management" />
  </StrictMode>
);
