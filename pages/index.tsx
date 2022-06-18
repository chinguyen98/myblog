import type { GetStaticProps, NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import { getAllPosts } from '../libs/api';
import Post from '../models/Post';

type HomePageProps = {
  posts: Post[];
};

const Home: NextPage<HomePageProps> = ({ posts }): JSX.Element => {
  return (
    <MainLayout>
      <div className="text-2xl font-bold text-black dark:text-white">colimaiBlog</div>
      {posts.map((post) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts: Post[] = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
