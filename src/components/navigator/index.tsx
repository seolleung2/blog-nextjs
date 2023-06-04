'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Blog } from '@interfaces/Blog';

type Props = {
  prev: Blog | null;
  next: Blog | null;
};

export default function BlogNavigator({ prev, next }: Props) {
  const router = useRouter();

  const moveToPrevPage = () => {
    if (prev) router.push(`/posts/${prev.slug}`);
  };

  const moveToNextPage = () => {
    if (next) router.push(`/posts/${next.slug}`);
  };

  return (
    <section className="flex justify-between border border-red-500">
      <div onClick={moveToPrevPage}>prev</div>
      <div onClick={moveToNextPage}>next</div>
    </section>
  );
}
