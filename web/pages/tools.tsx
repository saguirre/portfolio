import type { GetServerSidePropsContext, NextPage } from 'next';
import { DesktopLayout } from '../components/DesktopLayout';

interface ProjectsPageProps {
  resolvedUrl: string;
}
const Tools: NextPage<ProjectsPageProps> = ({ resolvedUrl }) => {
  return (
    <DesktopLayout resolvedUrl={resolvedUrl}>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  Here's an insiders look on the tools I use to work and enjoy while I'm doing it!
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  A comprehensive list of all the things I deem absolutely necessary even though they're completely
                  unnecessary.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="space-y-20">
                  <section
                    aria-labelledby=":r6:"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2 id=":r6:" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        Office
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              13” MacBook Pro, M1 Max, 32GB RAM (2021)
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              All I'm saying is: If you can go for it, do. Best purchase I ever made, period.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Two ViewSonic VX2718-2KPC-MHD 27" Monitors
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              I hold the two curve monitors in a stand, giving the illusion of having one ginormous
                              monitor, but with the versatility of them being actually two.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Obinslab AnnePro 2 60% Keyboard
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Wireless/Wired mechanical keyboard that's compatible with both Windows and Mac layouts.
                              Extremely comfortable, quiet and reliable.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Apple Magic Trackpad
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Second best purchase I've ever made. Incredible responsiveness and accuracy, all with a
                              battery life that will outlive us all.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Herman Miller Aeron Chair
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Hey, I don't judge, so I guess don't judge me? What can I say? It's an incredible chair.
                              Given my completely melted down body position when spending tons of time sitting down, it
                              get's the job done.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section
                    aria-labelledby=":r7:"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2 id=":r7:" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        Software Dev tools
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              VSCode IDE
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Best IDE I've had. Has never let me down and it's extremely customizable.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              iTerm2 + ZSH
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Gotta love those plugins! Remembering my commands and suggesting them is golden.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Docker
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Love it or hate it, you can't deny it's a truly amazing thing. I know very few developers
                              that still resist it. Don't be that guy.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              pgAdmin 4
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Postgres supremacy is a real thing. This app helps me review queries and checkout my
                              databases in a blink.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section
                    aria-labelledby=":r8:"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2 id=":r8:" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        Design
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Figma
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Amazing software to help you brainstorm, refine and finalize new designs. And now they
                              finally have dark mode!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                  <section
                    aria-labelledby=":r9:"
                    className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
                  >
                    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                      <h2 id=":r9:" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                        Productivity
                      </h2>
                      <div className="md:col-span-3">
                        <ul role="list" className="space-y-16">
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Notion
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Keeps my life in check. I carry some task tracking, expense budgeting, ideas, calendars
                              and just about everything I need.
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Obsidian
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              Alternative to Notion when I just need to write things down quickly. Fully markdown
                              integrated and offers a great mind-map feature where you can connect your ideas and
                              visualize them!
                            </p>
                          </li>
                          <li className="group relative flex flex-col items-start">
                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              Spotify
                            </h3>
                            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                              No programming session is done without some good ol' Country music ringing all around.
                              Just don't take my girlfriends opinion of it too literally.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DesktopLayout>
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

export default Tools;
