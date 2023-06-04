'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import { Blog } from '@interfaces/Blog';

type Props = {
  prev: Blog | null;
  next: Blog | null;
};

export default function BlogNavigator({ prev, next }: Props) {
  const router = useRouter();

  const moveToPrevPage = () => {
    router.push(`/posts/${prev.slug}`);
  };

  const moveToNextPage = () => {
    if (next) router.push(`/posts/${next.slug}`);
  };

  return (
    <section className="flex space-x-4">
      {prev && (
        <div
          className="group relative flex h-16 w-1/2 cursor-pointer items-center justify-start space-x-2 rounded-md bg-slate-200 p-3 font-medium shadow-lg hover:bg-purple-500 hover:text-white md:h-28 md:bg-transparent md:font-bold md:text-white md:hover:bg-transparent"
          onClick={moveToPrevPage}
        >
          <MdSkipPrevious className="block text-xl md:w-1/6 md:text-3xl" />
          <span className="md:hidden">이전 블로그로</span>
          <div className=" line-clamp-2 hidden flex-col items-start space-y-2 md:flex">
            <span className="w-fit rounded-lg bg-slate-200 px-2 py-0.5 text-black">
              이전글
            </span>
            <p className="h-12">{prev?.title || ''}</p>
          </div>
          <Image
            src={prev?.coverImage || '/images/default-cover.jpg'}
            alt="post-thumbnail"
            width={120}
            height={80}
            className="absolute right-0 -z-10 hidden h-28 w-full rounded-md object-cover brightness-50 group-hover:brightness-75 md:block"
          />
        </div>
      )}
      {next && (
        <div
          className="group relative flex h-16 w-1/2 cursor-pointer items-center justify-end space-x-2 rounded-md bg-slate-200 p-3 font-medium shadow-lg hover:bg-purple-500 hover:text-white md:h-28 md:bg-transparent md:font-bold md:text-white md:hover:bg-transparent"
          onClick={moveToNextPage}
        >
          <span className="md:hidden">다음 블로그로</span>
          <div className=" line-clamp-2 hidden flex-col items-end space-y-2 md:flex">
            <span className="w-fit rounded-lg bg-slate-200 px-2 py-0.5 text-black">
              다음글
            </span>
            <p className="h-12">{next?.title || ''}</p>
          </div>
          <Image
            src={next?.coverImage || '/images/default-cover.jpg'}
            alt="post-thumbnail"
            width={120}
            height={80}
            className="absolute right-0 -z-10 hidden h-28 w-full rounded-md object-cover brightness-50 group-hover:brightness-75 md:block"
          />
          <MdSkipNext className="block text-xl md:w-1/6 md:text-3xl" />
        </div>
      )}
    </section>
  );
}
