import React from 'react';
import Image from 'next/image';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { Blog } from '@interfaces/Blog';
import classNames from 'classnames';

type Props = {
  handleMovePage: () => void;
  navData: Blog;
  type: 'prev' | 'next';
};

export default function Detail({ navData, handleMovePage, type }: Props) {
  return (
    <div
      className={classNames(
        'group relative flex h-16 w-1/2 cursor-pointer items-center space-x-2 rounded-md bg-slate-200 p-3 font-medium hover:bg-purple-500 hover:text-white md:h-28 md:bg-transparent md:font-bold md:text-white md:hover:bg-transparent',
        type === 'prev' ? 'justify-start' : 'justify-end'
      )}
      onClick={handleMovePage}
    >
      {type === 'prev' && (
        <MdSkipPrevious className="block text-xl md:w-1/6 md:text-3xl" />
      )}
      <span className="md:hidden">
        {type === 'prev' ? '이전' : '다음'} 블로그로
      </span>
      <div
        className={classNames(
          'line-clamp-2 hidden flex-col space-y-2 md:flex',
          type === 'prev' ? 'items-start' : 'items-end'
        )}
      >
        <span className="w-fit rounded-lg bg-slate-200 px-2 py-0.5 text-sm text-black">
          {type === 'prev' ? '이전글' : '다음글'}
        </span>
        <p className="h-12">{navData?.title || ''}</p>
      </div>
      {type === 'next' && (
        <MdSkipNext className="block text-xl md:w-1/6 md:text-3xl" />
      )}
      <Image
        src={navData?.coverImage || '/images/default-cover.jpg'}
        alt="post-thumbnail"
        width={120}
        height={80}
        className="absolute right-0 -z-10 hidden h-28 w-full rounded-md object-cover brightness-50 group-hover:brightness-75 md:block"
      />
    </div>
  );
}
