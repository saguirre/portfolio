import { BanknotesIcon, LinkIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { Layout } from '../components/Layout';

interface ProjectsPageProps {
  resolvedUrl: string;
}
const Projects: NextPage<ProjectsPageProps> = ({ resolvedUrl }) => {
  return (
    <Layout resolvedUrl={resolvedUrl}>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Things I've worked on, for fun, or for work!
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I've worked on many different personal projects, some of which I can showcase and others not so much
                  (yeah, I never finished them, okay?). I'll list the ones I'm proud of here, as well as some work
                  related projects that are available for outside viewing.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  <li className="group relative flex flex-col items-start">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <img
                        alt="Swoops Logo"
                        src="/images/swoops_logo.jpeg"
                        width="32"
                        height="32"
                        decoding="async"
                        data-nimg="1"
                        className="h-8 w-8 rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="http://playswoops.com">
                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">Swoops</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      FANTASY SPORTS. REAL OWNERSHIP. Bringing basketball to the blockchain. Draft, Train, and
                      Strategize your way to running the court and winning real money competitions!
                    </p>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                      <LinkIcon className="w-5 h-5 flex-none" />
                      <span className="ml-2">playswoops.com</span>
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <BanknotesIcon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="https://bill-tracker-pi.vercel.app/">
                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">Bill Tracker</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Bill Tracking website with group expense sharing capability. Built this over a small period of
                      time and still have a gigantic list of features I want to add to it. Check it out!
                    </p>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                      <LinkIcon className="w-5 h-5 flex-none" />
                      <span className="ml-2">bill-tracker-pi.vercel.app</span>
                    </p>
                  </li>
                  <li className="group relative flex flex-col items-start">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <ListBulletIcon className="h-8 w-8 text-blue-500" />
                    </div>
                    <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                      <a href="https://www.jatdl.io/">
                        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                        <span className="relative z-10">Just Another To-Do List</span>
                      </a>
                    </h2>
                    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                      Yeah, as the title suggests, yet another To-Do List app. However, you'll find that it's pretty
                      complete, featuring a set of themes, translation, Single Sign on integration and a very responsive
                      and fast experience for users in any platform!
                    </p>
                    <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                      <LinkIcon className="w-5 h-5 flex-none" />
                      <span className="ml-2">jatdl.io</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { resolvedUrl } = context;
  return {
    props: {
      resolvedUrl,
    },
  };
}
export default Projects;
