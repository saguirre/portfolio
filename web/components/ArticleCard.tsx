import { ArrowTopRightOnSquareIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  date: string;
  paragraph: string;
  href: string;
}
export const ArticleCard: React.FC<ArticleCardProps> = ({ title, date, paragraph, href }) => {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="">
        <div className="absolute border shadow-md border-zinc-200 -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-lg"></div>
        <Link href={'/articles' + href}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-lg"></span>
          <span className="relative z-10">{title}</span>
        </Link>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-600 dark:text-zinc-300 pl-3.5"
        dateTime="2022-09-05"
      >
        <span className="absolute inset-y-0 -left-1.5 flex items-center" aria-hidden="true">
          <BookmarkIcon className="w-4 h-4 mr-2" />
        </span>
        {date}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-700 dark:text-zinc-300">{paragraph}</p>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center w-full justify-end text-sm font-medium text-blue-400"
      >
        Read article
        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
      </div>
    </article>
  );
};
