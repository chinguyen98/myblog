import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type MarkdownRendererProps = {
  content: string;
};

const MarkdownRenderer = ({ content }: MarkdownRendererProps): JSX.Element => {
  return (
    <ReactMarkdown remarkPlugins={[[remarkGfm, { singleTilde: false }]]}>{content}</ReactMarkdown>
  );
};

export default MarkdownRenderer;
