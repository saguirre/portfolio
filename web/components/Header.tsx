import { HomeIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { Navbar } from './Navbar';
import { ThemeButton } from './ThemeButton';

interface HeaderProps {
  resolvedUrl: string;
  hideImage?: boolean;
}
export const Header: React.FC<HeaderProps> = ({ resolvedUrl, hideImage = false }) => {
  const titleFromResolvedUrl = useMemo(() => {
    switch (resolvedUrl) {
      case '/about':
        return 'About';
      case '/projects':
        return 'Projects';
      case '/articles':
        return 'Articles';
      case '/tools':
        return 'Tools';
      case '/not-found':
        return '404: Sock not found';
      default:
        return 'Santiago Aguirre - Portfolio';
    }
  }, [resolvedUrl]);

  return (
    <div className="flex flex-row items-center gap-3 justify-between w-full pt-2 max-w-4xl px-3">
      <Head>
        <title>{titleFromResolvedUrl}</title>
        <meta property="og:title" content="Santiago Aguirre - Portfolio" key="title" />
      </Head>
      <Link href="/" aria-label="Link home">
        <div
          className={classNames('flex flex-col items-center justify-center w-full surrounding-border rounded-full', {
            'p-1': !hideImage,
            'p-3': hideImage,
          })}
        >
          {hideImage && <HomeIcon className="h-5 w-5 text-blue-400" />}
          {!hideImage && (
            <div className="h-9 w-9">
              <Image
                height={36}
                width={36}
                priority={true}
                src="/images/profile_photo.jpeg"
                className="w-full h-full rounded-full bg-white"
                alt="Profile Picture"
              />
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-row items-center justify-end sm:hidden w-full gap-3">
        <Navbar resolvedUrl={resolvedUrl} />
        <ThemeButton />
      </div>
      <Navbar className="hidden sm:flex" resolvedUrl={resolvedUrl} />
      <ThemeButton className="hidden sm:flex" />
    </div>
  );
};
