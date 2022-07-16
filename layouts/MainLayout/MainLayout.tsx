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
      <div className="w-full">
        <Navbar />
        <>{children}</>
      </div>
    </>
  );
};

export default MainLayout;
