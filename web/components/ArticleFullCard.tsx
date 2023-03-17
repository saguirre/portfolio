import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface ArticleFullCardProps {
  title: string;
  date: string;
  paragraph: string;
  href: string;
}
export const ArticleFullCard: React.FC<ArticleFullCardProps> = ({ title, date, paragraph, href }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <div className="md:col-span-3 group relative flex flex-col items-start">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          <div className="absolute border shadow-md border-zinc-200 -inset-y-6 -inset-x-4 z-0 scale-100 bg-zinc-50 opacity-0 transition group-hover:scale-105 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-lg"></div>
          <a href={'/articles' + href}>
            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <span className="relative z-10">{title}</span>
          </a>
        </h2>
        <time
          className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-700 dark:text-zinc-300 pl-3.5"
          dateTime="2022-09-05"
        >
          <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          {date}
        </time>
        <p className="relative z-10 mt-2 text-sm text-zinc-700 dark:text-zinc-200">{paragraph}</p>
        <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500">
          Read article
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
        </div>
      </div>
      <time
        className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-700 dark:text-zinc-300"
        dateTime="2022-09-05"
      >
        {date}
      </time>
    </article>
  );
};
