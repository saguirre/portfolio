import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import { Fragment } from 'react';
import { DefaultHeaders } from '../constants/DefaultHeaders';
import { HeaderItem } from '../models/HeaderItem';
import { useRouter } from 'next/router';

interface NavbarProps {
  className?: string;
}
export const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const router = useRouter();
  const path = router.asPath;
  console.log(path)
  return (
    <>
      <div
        className={classNames(
          'hidden sm:flex flex-row items-center justify-center w-full max-w-md md:max-w-sm divide-x divide-zinc-200 dark:divide-zinc-700/80 border border-zinc-200 dark:border-zinc-700/80 px-8 rounded-full shadow-md',
          className
        )}
      >
        {DefaultHeaders.map((header: HeaderItem, index) => (
          <Link key={header.href} href={header.href}>
            <div
              className={classNames('py-1.5 w-28 md:w-32 flex flex-col items-center justify-center', {
                'rounded-l-lg': index === 0,
                'rounded-r-lg': index === DefaultHeaders.length - 1,
                'font-semibold rounded-l-full text-blue-500 shadow-inner': path == header.href && index === 0,
                'font-semibold rounded-r-full text-blue-500 shadow-inner':
                  path == header.href && index === DefaultHeaders.length - 1,
                'font-semibold text-blue-500 shadow-inner': path === header.href,
                'hover:text-blue-500 hover:dark:text-zinc-200': path !== header.href,
              })}
            >
              <span className="text-center">{header.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div
        className={classNames(
          'sm:hidden flex flex-row items-center justify-center w-fit max-w-lg divide-x divide-zinc-200 dark:divide-zinc-700/80 border border-zinc-200 dark:border-zinc-700/80 px-4 py-2 rounded-full shadow-md',
          className
        )}
      >
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex flex-row items-center justify-start gap-1">
              Menu
              <ChevronDownIcon className="-mr-1 h-4 w-4 text-blue-200 hover:text-blue-100" aria-hidden="true" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50 -right-4 mt-4 w-56 origin-top-right bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 divide-y dark:divide-zinc-600 divide-zinc-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {DefaultHeaders.map((header: HeaderItem, index) => (
                <Link key={header.href} href={header.href}>
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={header.href}
                          className={`${
                            active || path === header.href ? 'text-blue-500' : ''
                          } group flex w-full items-center rounded-lg px-2 py-2 text-sm`}
                        >
                          {header.title}
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Link>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  );
};
