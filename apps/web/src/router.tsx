import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { HeroScreen } from './components/hero-screen/HeroScreen';
import { LogIn } from './routes/SignIn/LogIn';
import { SignUp } from './routes/SignUp/SignUp';
import { Authorization } from './routes/authorization/Authorization';
import { Deals } from './routes/deals/Deals';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HeroScreen />,
      },
      {
        path: 'authorization',
        element: <Authorization />,
        children: [
          {
            path: 'sign-in',
            element: <LogIn />,
          },
          {
            path: 'sign-up',
            element: <SignUp />,
          },
        ],
      },
      {
        path: 'deals',
        element: <Deals />,
      },
    ],
  },
]);
