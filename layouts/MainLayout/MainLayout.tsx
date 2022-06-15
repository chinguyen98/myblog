import { ReactNode } from 'react';
import Navbar from './components/Navbar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="bg-gray-400 w-screen h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
