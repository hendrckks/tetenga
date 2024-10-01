import { Outlet } from 'react-router-dom';
import NavSortof from '../components/ui/NavSortof';

const MainLayout = () => {
  return (
    <main className="bg-[#080808]">
      <NavSortof />
      <Outlet />
    </main>
  );
};

export default MainLayout;
