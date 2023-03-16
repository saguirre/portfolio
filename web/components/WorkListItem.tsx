import Image from 'next/image';

interface WorkListItemProps {
  imageSrc: string;
  companyName: string;
  role: string;
  dateStarted: string;
  dateEnded?: string;
}
export const WorkListItem: React.FC<WorkListItemProps> = ({ companyName, dateStarted, imageSrc, role, dateEnded }) => {
  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          alt={`${companyName} Logo`}
          src={imageSrc}
          width={32}
          height={32}
          priority={true}
          decoding="async"
          data-nimg="1"
          className="h-7 w-7 rounded-full"
          loading="lazy"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">{companyName}</dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-700 dark:text-zinc-200">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-600 dark:text-zinc-300" aria-label="2019 until Present">
          <time dateTime="2019">{dateStarted}</time>
          <span aria-hidden="true">—</span>
          <time dateTime="2023">{dateEnded || 'Present'}</time>
        </dd>
      </dl>
    </li>
  );
};
