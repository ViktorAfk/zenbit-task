import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { HeroScreen } from './components/hero-screen/HeroScreen';

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
