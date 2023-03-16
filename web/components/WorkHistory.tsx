import { BriefcaseIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { WorkListItem } from './WorkListItem';

export const WorkHistory: React.FC = () => {
  return (
    <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700/80">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        <WorkListItem
          imageSrc={'/images/swoops_logo.jpeg'}
          companyName={'Swoops'}
          role={'Senior Frontend Web3 Engineer'}
          dateStarted={'2022'}
        />
        <WorkListItem
          imageSrc={'/images/light_it_logo.jpeg'}
          companyName={'Light-it'}
          role={'Senior Fullstack Engineer'}
          dateStarted={'2022'}
          dateEnded={'2022'}
        />
        <WorkListItem
          imageSrc={'/images/switch_logo.jpeg'}
          companyName={'Switch Software Solutions'}
          role={'Fullstack Engineer'}
          dateStarted={'2018'}
          dateEnded={'2022'}
        />
      </ol>
      <a
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm transition active:transition-none bg-blue-400 font-medium text-white hover:bg-blue-500/90 active:bg-blue-500 active:text-white/90 group mt-6 w-full"
        href="/files/resume_santiago_aguirre.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
        <ArrowDownTrayIcon className="h-4 w-4" />
      </a>
    </div>
  );
};
