import Image from 'next/image';
import Link from 'next/link';

type PreviewPostProps = {
  title: string;
  previewImage: string;
  slug: string;
};

function PreviewPost({ title, previewImage, slug }: PreviewPostProps): JSX.Element {
  console.log({ previewImage });

  return (
    <Link href={`/posts/${slug}`}>
      <a className="flex flex-col justify-center items-center">
        <Image src={`${previewImage}`} objectFit="contain" width={300} height={200} alt={title} />
        <div>{title}</div>
      </a>
    </Link>
  );
}

export default PreviewPost;
