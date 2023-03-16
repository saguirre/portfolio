import { HomeIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { ThemeButton } from './ThemeButton';

interface HeaderProps {
  resolvedUrl: string;
  hideImage?: boolean;
}
export const Header: React.FC<HeaderProps> = ({ resolvedUrl, hideImage = false }) => {
  return (
    <div className="flex flex-row items-center justify-end gap-3 sm:justify-between w-full pt-2 max-w-4xl px-3">
      <Link href="/">
        <div
          className={classNames(
            'flex flex-col items-center justify-center mr-auto sm:mr-0 surrounding-border rounded-full',
            {
              'p-1': !hideImage,
              'p-3': hideImage,
            }
          )}
        >
          {hideImage && <HomeIcon className="h-5 w-5 text-blue-400" />}
          {!hideImage && (
            <Image
              height={44}
              width={44}
              priority={true}
              src="/images/profile_photo.jpeg"
              className="h-9 w-9 rounded-full bg-white"
              alt="Profile Picture"
            />
          )}
        </div>
      </Link>
      <Navbar resolvedUrl={resolvedUrl} />
      <ThemeButton />
    </div>
  );
};
