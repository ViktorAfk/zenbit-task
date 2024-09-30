import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
