import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Button } from './components/Button/Button';
import router from './routers';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
