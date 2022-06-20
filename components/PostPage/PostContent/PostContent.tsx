
type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps): JSX.Element => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostContent;
