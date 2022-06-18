import { ReactNode } from 'react';
import Navbar from './components/Navbar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="bg-sky-50 dark:bg-slate-600 w-screen h-screen">
      <Navbar />
      <div className="container mx-auto p-5">{children}</div>
    </div>
  );
};

export default MainLayout;
