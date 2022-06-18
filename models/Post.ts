type Post = {
  slug: string;
  title: string;
  date: number;
  excerpt: string;
  content: string;
  image: {
    cover: string;
    og: string;
  };
};

export default Post;
