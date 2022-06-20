import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { getAllPosts, getPostBySlug } from '../../libs/api';
import markdownToHtml from '../../libs/markdownToHtml';
import Post from '../../models/Post';
import ErrorPage from 'next/error';
import Head from 'next/head';
import PostHeader from '../../components/PostPage/PostHeader';
import PostContent from '../../components/PostPage/PostContent';

type PostPageProps = {
  post: Post;
};

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <>Loading.....!</>
      ) : (
        <>
          <Head>
            <title>{post.title || 'coliamaiBlog'}</title>
            <meta property="og:image" content={post.image?.og} key="og" />
          </Head>
          <PostHeader date={post.date!} title={post.title!} coverImg={post.image?.cover!} />
          <PostContent content={post.content!} />
        </>
      )}
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const { slug } = params as IParams;

  const post: Post = getPostBySlug(slug, ['title', 'date', 'slug', 'image', 'excerpt', 'content']);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const posts: Post[] = getAllPosts(['slug']);

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
