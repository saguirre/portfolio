import { EnvelopeIcon } from '@heroicons/react/24/solid';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import Image from 'next/image';

interface AboutPageProps {
  resolvedUrl: string;
}
const About: NextPage<AboutPageProps> = ({ resolvedUrl }) => {
  return (
    <Layout resolvedUrl={resolvedUrl} hideImage>
      <Head>
        <meta name="About page" content="All of Santiago Aguirre's personal information - plus an introduction." />
      </Head>
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                  <div className="max-w-xs pl-9 sm:px-2.5 lg:max-w-none">
                    <Image
                      alt=""
                      sizes="(min-width: 1024px) 32rem, 20rem"
                      src="/images/profile_photo.jpeg"
                      width={800}
                      height={800}
                      priority={true}
                      decoding="async"
                      className="aspect-square rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                    />
                  </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    I'm Santiago Aguirre, a Fullstack Engineer with a passion for Web development.
                  </h1>
                  <div className="mt-6 space-y-7 paragraph">
                    <p>
                      My passion for technology started at a young age when I built my first website at 13 years old
                      using HTML, CSS, and, ahem, Flash Player (let's not talk about that one). From there, my curiosity
                      and eagerness to learn led me to explore different programming languages and frameworks throughout
                      my teenage years.
                    </p>
                    <p>
                      During college, I had the opportunity to work as a Fullstack Engineer and gain valuable experience
                      with React, Node, and Angular. I was fortunate to have my skills and expertise recognized, and as
                      a result, I was offered positions with companies both in Uruguay and beyond.
                    </p>
                    <p>
                      While I'm proud of what I've accomplished, I know that there is always more to learn and that I
                      still have much to achieve. I remain committed to improving my skills and staying up-to-date with
                      the latest industry trends so that I can continue to deliver high-quality work for my clients and
                      colleagues.
                    </p>
                    <p>
                      When I'm not coding or designing, I enjoy spending time with girlfriend and my furry friend - my
                      dog Emma.
                    </p>
                    <p>That's it!</p>
                  </div>
                </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
                        href="https://github.com/saguirre"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none -mt-0.5 fill-zinc-500 transition group-hover:fill-blue-500"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                          ></path>
                        </svg>
                        <span className="ml-2">Follow on GitHub</span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
                        href="https://www.linkedin.com/in/santiago-aguirre-717248161/"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 -mt-0.5 flex-none fill-zinc-500 transition group-hover:fill-blue-500"
                        >
                          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                        </svg>
                        <span className="ml-2">Follow on LinkedIn</span>
                      </a>
                    </li>
                    <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
                      <a
                        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
                        href="mailto:spencer@planetaria.tech"
                      >
                        <EnvelopeIcon className="h-6 w-6 -mt-[0.5px] fill-zinc-500 transition group-hover:fill-blue-500" />
                        <span className="ml-2">santiago.aguirre@hey.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
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

export default About;
