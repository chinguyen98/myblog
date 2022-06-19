import { useEffect, useState } from 'react';
import { getDisplayTime } from '../../../libs/datetime';

type PostHeaderProps = {
  title: string;
  date: number;
};

const PostHeader = ({ date, title }: PostHeaderProps): JSX.Element => {
  const [displayTime, setDisplayTime] = useState<any | null>(null);

  useEffect(() => {
    setDisplayTime(getDisplayTime(date, 'DD MMMM YYYY'));
  }, [date]);

  return (
    <div>
      <h1 className="text-4xl mb-2">{title}</h1>
      <h5>{displayTime}</h5>
    </div>
  );
};

export default PostHeader;
