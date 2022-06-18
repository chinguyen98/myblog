import Image from 'next/image';

type PreviewPostProps = {
  title: string;
  previewImage: string;
};

function PreviewPost({ title, previewImage }: PreviewPostProps): JSX.Element {
  console.log({ previewImage });

  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={`${previewImage}`} objectFit="contain" width={300} height={200} alt={title} />
      <div>{title}</div>
    </div>
  );
}

export default PreviewPost;
