import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from './Navbar';
import { ThemeButton } from './ThemeButton';

interface HeaderProps {
  resolvedUrl: string;
}
export const Header: React.FC<HeaderProps> = ({ resolvedUrl }) => {
  return (
    <div className="flex flex-row items-center justify-end gap-3 sm:justify-between w-full pt-2 max-w-4xl px-3 sm:px-0">
      <div className="flex flex-col items-center justify-center mr-auto sm:mr-0 p-1 surrounding-border rounded-full">
        <Link href="/">
          <Image
            height={44}
            width={44}
            priority={true}
            src="/images/profile_photo.jpeg"
            className="h-10 w-10 rounded-full bg-white"
            alt="Profile Picture"
          />
        </Link>
      </div>
      <Navbar resolvedUrl={resolvedUrl} />
      <ThemeButton />
    </div>
  );
};
