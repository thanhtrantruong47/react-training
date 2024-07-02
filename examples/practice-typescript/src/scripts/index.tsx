import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import SideBar from 'components/SideBar';
import TableContainer from 'components/TableContainer';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <SideBar />
    <TableContainer />
  </StrictMode>
);
