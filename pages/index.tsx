import type { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="text-2xl font-bold underline">This is MyBlog</div>
    </MainLayout>
  );
};

export default Home;
