import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/Layout';

const FourOhFour: NextPage = () => {
  return (
    <Layout resolvedUrl="/not-found">
      <Head>
        <meta name="Not found page" content="Page wasn't found, but here's a story!" />
      </Head>
      <div className="mt-24 flex flex-col items-start justify-start w-full max-w-2xl lg:max-w-5xl">
        <div className="max-w-2xl px-4 sm:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            404: Sock not found
          </h1>
          <p className="mt-6 text-base font-semibold text-zinc-900 dark:text-zinc-200">
            The page you requested wasn't found, but so you don't leave empty handed here's a story called{' '}
            <span className="italic">The Case of Missing Socks.</span>
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Once upon a time, in a tiny village, there lived a forgetful yet charming old lady named Granny Whiskers.
            She had a peculiar problem - her socks were always going missing!
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            One day, Granny Whiskers was in a hurry to attend a village meeting. To her dismay, she couldn't find a
            matching pair of socks. Frustrated, she grabbed two odd socks and left her house, determined to find the
            cause of her missing socks.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            During the meeting, she shared her problem with the villagers. To her surprise, many of them had the same
            issue. The village was abuzz with theories - sock goblins, magical sock-devouring washing machines, and even
            the idea of an underground sock black market.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A wise old man, who had been silent throughout the discussion, finally spoke up. He suggested that perhaps
            the answer was not in finding the lost socks, but in finding the lesson within the situation.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            The villagers were puzzled but decided to give it a try. They stopped worrying about their missing socks and
            started to embrace the mismatched pairs they were left with.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Soon, the village became famous for its quirky, colorful socks. Visitors from all over came to witness the
            villagers' unique sense of style. Granny Whiskers and her neighbors had turned a frustrating situation into
            a delightful lesson in creativity, self-expression, and letting go of the little things.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            And so, the mystery of the missing socks remained unsolved, but the village had found something much more
            valuable - the joy in embracing life's imperfections.
          </p>
          <p className="mt-6 text-base font-semibold text-zinc-900 dark:text-zinc-200">
            Sometimes, it's not about finding what's missing, but discovering the beauty in what remains.
          </p>
          <p className="mt-6 text-base font-semibold text-zinc-900 dark:text-zinc-200">
            [Feel free to enjoy the rest of the website!]
          </p>
          <div className="mt-6 flex gap-6">
            <a className="group -m-1 p-1" aria-label="Follow on GitHub" href="https://github.com/saguirre">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on LinkedIn"
              href="https://www.linkedin.com/in/santiago-aguirre-717248161/"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFour;
