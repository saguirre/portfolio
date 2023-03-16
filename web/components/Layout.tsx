import { useEffect, useState } from 'react';
import { Header } from './Header';
import PacmanLoader from 'react-spinners/PacmanLoader';

interface LayoutProps {
  resolvedUrl: string;
  children?: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ resolvedUrl, children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full bg-zinc-100 dark:bg-zinc-900">
      {!loading && (
        <div className="py-2 w-full flex flex-col items-center justify-start max-w-6xl shadow-lg border-x border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 rounded-b-lg">
          <Header resolvedUrl={resolvedUrl} />
          {children}
          <footer className="mt-32">
            <div className="sm:px-8">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          <a className="transition hover:text-blue-500 dark:hover:text-blue-400" href="/about">
                            About
                          </a>
                          <a className="transition hover:text-blue-500 dark:hover:text-blue-400" href="/projects">
                            Projects
                          </a>
                          <a className="transition hover:text-blue-500 dark:hover:text-blue-400" href="/speaking">
                            Articles
                          </a>
                          <a className="transition hover:text-blue-500 dark:hover:text-blue-400" href="/uses">
                            Tools
                          </a>
                        </div>
                        <p className="text-sm text-zinc-400 dark:text-zinc-500">
                          ©2023 Santiago Aguirre. All rights reserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
      {loading && (
        <div className="flex flex-col h-screen w-full items-center justify-center">
          <PacmanLoader size={25} color="#60a5fa" />
        </div>
      )}
    </div>
  );
};
