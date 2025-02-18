import { createBrowserRouter } from 'react-router-dom';
// import { AnimatePresence } from 'framer-motion';
import MainLayout from '../app/MainLayout';
import Home from '../app/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
