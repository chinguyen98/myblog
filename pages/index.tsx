import type { GetStaticProps, NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import Post from '../models/Post';

type HomePageProps = {
  posts: Post[];
};

const Home: NextPage<HomePageProps> = ({}): JSX.Element => {
  return (
    <MainLayout>
      <div className="text-2xl font-bold text-black dark:text-white">colimaiBlog</div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      posts: [],
    },
  };
};

export default Home;
