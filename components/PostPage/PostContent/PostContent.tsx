type PostContentProps = {
  content: string;
};

const PostContent = ({ content }: PostContentProps): JSX.Element => {
  return (
    <>
      <div>{content}</div>
    </>
  );
};

export default PostContent;
