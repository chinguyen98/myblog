import { ReactNode } from 'react';
import Meta from '../../components/Meta';
import Navbar from './components/Navbar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <>
      <Meta />
      <div className="bg-sky-50 dark:bg-slate-600 w-screen h-screen">
        <Navbar />
        <div className="container mx-auto p-5">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
