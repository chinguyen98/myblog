import MarkdownRenderer from '../../MarkdownRenderer';

type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps): JSX.Element => {
  return <MarkdownRenderer content={content} />;
};

export default PostContent;
