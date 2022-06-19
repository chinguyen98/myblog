type Post = {
  slug?: string;
  title?: string;
  date?: number;
  excerpt?: string;
  content?: string;
  image?: {
    cover?: string;
    preview?: string;
    og?: string;
  };
};

export default Post;
