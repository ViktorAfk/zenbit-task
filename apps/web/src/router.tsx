import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { LogIn } from './routes/SignIn/LogIn';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: 'sign-in',
    element: <LogIn />,
  },
  // {
  //   path: 'create',
  //   element: <CreateEvent />,
  // },
]);
