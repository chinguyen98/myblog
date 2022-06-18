type PreviewPostProps = {
  title: string;
};

function PreviewPost({ title }: PreviewPostProps): JSX.Element {
  return <div>{title}</div>;
}

export default PreviewPost;
