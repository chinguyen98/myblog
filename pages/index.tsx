import type { GetStaticProps, NextPage } from 'next';
import PreviewPost from '../components/PreviewPost';
import { getAllPosts } from '../libs/api';
import Post from '../models/Post';

type HomePageProps = {
  posts: Post[];
};

const Home: NextPage<HomePageProps> = ({ posts }): JSX.Element => {
  return (
    <>
      <div className="text-2xl font-bold text-black dark:text-white my-5">colimaiBlog</div>
      <div className="grid grid-cols-4 gap-4bg-yellow-400">
        {posts.map((post) => (
          <PreviewPost
            key={post.slug}
            title={post.title!}
            previewImage={post.image?.preview!}
            slug={post.slug!}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts: Post[] = getAllPosts(['title', 'date', 'slug', 'image', 'excerpt']);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
