import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getAllPosts, getPostBySlug } from '../../libs/api';
import Post from '../../models/Post';

type PostPageProps = {
  post: Post;
};

const PostPage: NextPage<PostPageProps> = ({}) => {
  return <></>;
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const { slug } = params as IParams;

  const post: Post = getPostBySlug(slug, ['title', 'date', 'slug', 'image', 'excerpt']);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const posts: Post[] = getAllPosts(['title', 'date', 'slug', 'image', 'excerpt']);

  return {
    paths: posts.map((post: Post) => ({
      params: {
        slug: post.slug!,
      },
    })),
    fallback: false,
  };
};

export default PostPage;
