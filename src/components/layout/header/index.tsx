'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { useTheme } from 'next-themes';
import { GoThreeBars } from 'react-icons/go';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { GiAcorn } from 'react-icons/gi';
import { CATEGORIES } from '@service/constant';

export default function PageHeader() {
  const { theme, setTheme } = useTheme();
  const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

  const handleChangeSetTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="sticky top-0 z-10 bg-white drop-shadow-lg dark:bg-stone-800">
      <nav className="navbar mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-8">
        <div className="logo mr-6 flex grow items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <h1 className="flex items-center gap-1.5 font-bold text-slate-800 dark:text-white">
              <GiAcorn className="text-3xl" />
              Dotori Blog
            </h1>
          </Link>
          <button type="button" onClick={handleChangeSetTheme}>
            {theme === 'light' ? (
              <BsMoonFill className="text-2xl" />
            ) : (
              <BsSunFill className="text-2xl" />
            )}
          </button>
        </div>
        <ul className="links hidden gap-8 md:flex">
          {CATEGORIES.map(({ id, link, category }) => (
            <li key={id}>
              <Link href={link}>{category}</Link>
            </li>
          ))}
        </ul>
        <div
          className="toggle_btn block cursor-pointer text-2xl md:hidden"
          onClick={() => setIsOpenDropdown(!isOpenDropdown)}
        >
          {!isOpenDropdown ? <GoThreeBars /> : <IoMdClose />}
        </div>
      </nav>
      <div className="absolute w-full">
        <ul
          className={cn(
            'dropdown_menu flex flex-col items-center justify-center overflow-hidden rounded-md bg-slate-100 opacity-95 duration-500 ease-in-out dark:bg-slate-700 md:hidden',
            isOpenDropdown ? 'h-52' : 'h-0'
          )}
        >
          {CATEGORIES.map(({ id, link, category }) => (
            <Link
              href={link}
              key={id}
              className="w-full px-2"
              onClick={() => setIsOpenDropdown(false)}
            >
              <li className="flex items-center justify-center rounded-md p-3 font-semibold hover:bg-amber-400 focus:bg-amber-400 active:bg-amber-400">
                {category}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
