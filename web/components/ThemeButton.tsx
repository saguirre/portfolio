import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';

interface ThemeButton {
  className?: string;
}
export const ThemeButton: React.FC<ThemeButton> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const updateTheme = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {!mounted && (
        <div className={classNames('p-3', className)}>
          <div className="h-5 w-5"></div>
        </div>
      )}
      {mounted && (
        <button
          aria-label="Update Theme"
          onClick={updateTheme}
          className={classNames(
            'cursor-pointer surrounding-border hover:text-zinc-500 text-zinc-400 dark:hover:text-zinc-400 dark:text-zinc-500 shadow-md rounded-full p-3 flex flex-col items-center justify-center',
            className
          )}
        >
          <Transition
            as={Fragment}
            show={theme === 'dark'}
            enter="transform transition duration-300"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
          >
            <MoonIcon
              className={classNames('text-blue-400 transform transition duration-300', {
                'h-0 w-5': theme === 'light',
                'h-5 w-5': theme === 'dark',
              })}
            />
          </Transition>
          <Transition
            as={Fragment}
            show={theme === 'light'}
            enter="transform transition duration-300"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
          >
            <SunIcon
              className={classNames('text-blue-400 transform transition duration-300', {
                'h-0 w-5': theme === 'dark',
                'h-5 w-5': theme === 'light',
              })}
            />
          </Transition>
        </button>
      )}
    </>
  );
};
