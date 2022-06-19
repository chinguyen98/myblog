import 'dayjs/locale/vi';
import dayjs from 'dayjs';

import duration from 'dayjs/plugin/duration';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(utc);
dayjs.locale('vi');
dayjs.updateLocale('vi', {});
dayjs.extend(isYesterday);
dayjs.extend(isToday);
dayjs.extend(duration);

export const getDisplayTime = (unix_time: number, format = 'HH:mm:ss, dd, DD MMMM YYYY') => {
  return dayjs.unix(unix_time).format(format);
};

export const getCurrentUnixTime = () => {
  return dayjs(dayjs()).valueOf();
};

export const getRelativeTime = (unix_time: number) => {
  return dayjs(dayjs(unix_time)).fromNow();
};

export const getAbsoluteTime = (unix_time: number, format = 'HH:mm:ss, dd, DD MMMM YYYY') => {
  return dayjs(dayjs(unix_time)).locale('vi').format(format);
};

export const getAndFormatAbsoluteTime = (
  unix_time: number,
  fullFormat = 'HH:mm:ss, dd, DD MMMM YYYY'
) => {
  const messageTimeString = getAbsoluteTime(unix_time, 'YYYY-M-DD');
  const currentTimeString = getAbsoluteTime(getCurrentUnixTime(), 'YYYY-M-DD');
  const diffTime = dayjs(currentTimeString).diff(messageTimeString, 'day', true);

  let timeQuote = null;
  if (diffTime !== null) {
    if (diffTime <= 1 && dayjs(messageTimeString).isToday()) {
      timeQuote = getAbsoluteTime(unix_time, 'HH:mm');
    } else if (diffTime <= 1 && dayjs(messageTimeString).isYesterday()) {
      timeQuote = getAbsoluteTime(unix_time, 'dd');
    } else if (diffTime > 1 && diffTime < 7) {
      timeQuote = getAbsoluteTime(unix_time, 'dd');
    } else if (diffTime >= 7) {
      timeQuote = getAbsoluteTime(unix_time, fullFormat);
    }
  }

  return timeQuote;
};

export const getAndFormatFeedbackTime = (unix_time: number) => {
  const messageTimeString = getAbsoluteTime(unix_time, 'YYYY-M-DD');
  const currentTimeString = getAbsoluteTime(getCurrentUnixTime(), 'YYYY-M-DD');
  const diffTime = dayjs(currentTimeString).diff(messageTimeString, 'day', true);

  let timeQuote = null;
  if (diffTime !== null) {
    if (diffTime <= 1 && dayjs(messageTimeString).isToday()) {
      timeQuote = `${getAbsoluteTime(unix_time, 'HH:mm')} - Hôm nay`;
    } else {
      timeQuote = `${getAbsoluteTime(unix_time, 'HH:mm - DD/M/YYYY')}`;
    }
  }

  return timeQuote;
};

export const getDurationTime = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds} giây`;
  } else {
    return dayjs.duration(seconds, 'second').humanize();
  }
};

export const getDiffDay = (first_unix_time: number, second_unix_time: number) => {
  const diffDay = dayjs(first_unix_time).diff(dayjs(second_unix_time), 'days');
  return diffDay;
};

export const getDiffMinute = (first_unix_time: number, second_unix_time: number) => {
  const diffMinute = Math.ceil(Math.abs(first_unix_time - second_unix_time) / (1000 * 60));
  return diffMinute;
};

export const isSameDay = (first_unix_time: number, second_unix_time: number) => {
  const firstDay = Math.floor(first_unix_time / 86400000);
  const secondDay = Math.floor(second_unix_time / 86400000);

  return firstDay === secondDay;
};

export default dayjs;
