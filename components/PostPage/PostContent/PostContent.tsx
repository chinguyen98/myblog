import MarkdownRenderer from '../../MarkdownRenderer';

type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps): JSX.Element => {
  return (
    <div className="p-16">
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default PostContent;
