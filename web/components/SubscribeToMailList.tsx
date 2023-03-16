import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export const SubscribeToMailList: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <form action="/thank-you" className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-700/80">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <EnvelopeIcon className="h-6 w-6" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
        />
        <button
          aria-label="Join Newsletter"
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 dark:bg-zinc-900 dark:text-white text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-white active:bg-black active:text-white dark:hover:bg-zinc-50 dark:hover:text-black dark:active:bg-zinc-100 ml-4 flex-none"
          type="submit"
        >
          Join
        </button>
        <span id="1678909704098-0" data-dashlanecreated="true"></span>
      </div>
    </form>
  );
};
