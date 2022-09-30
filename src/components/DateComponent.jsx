import { format } from 'date-fns';

export default function DateComponent({ dateString }) {
  return (
    <time className='prose dark:prose-invert' dateTime={dateString}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  );
}
