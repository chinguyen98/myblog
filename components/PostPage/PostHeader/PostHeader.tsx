import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getDisplayTime } from '../../../libs/datetime';

type PostHeaderProps = {
  title: string;
  date: number;
  coverImg: string;
};

const PostHeader = ({ date, title, coverImg }: PostHeaderProps): JSX.Element => {
  const [displayTime, setDisplayTime] = useState<any | null>(null);

  useEffect(() => {
    setDisplayTime(getDisplayTime(date, 'DD MMMM YYYY'));
  }, [date]);

  return (
    <div className="w-full px-32 py-2 font-bold">
      <div>
        <h1 className="text-4xl mb-2">{title}</h1>
        <h5>{displayTime}</h5>
      </div>
      <div className="w-full flex justify-center mt-3">
        <Image src={coverImg} objectFit={'cover'} width={700} height={350} alt={title} />
      </div>
    </div>
  );
};

export default PostHeader;
