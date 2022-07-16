import MarkdownRenderer from '../../MarkdownRenderer';

type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps): JSX.Element => {
  return (
    <div className="w-full">
      <div className="px-32 py-5 text-lg w-full text-justify">
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
};

export default PostContent;
