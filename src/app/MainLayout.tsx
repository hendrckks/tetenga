import { Outlet } from 'react-router-dom';
import NavSortof from '../components/ui/NavSortof';

const MainLayout = () => {
  return (
    <main>
      <NavSortof />
      <Outlet />
    </main>
  );
};

export default MainLayout;
