'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Blog } from '@interfaces/Blog';
import Detail from './Detail';

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
    <section className="flex space-x-4">
      {prev && (
        <Detail handleMovePage={moveToPrevPage} navData={prev} type="prev" />
      )}
      {next && (
        <Detail handleMovePage={moveToNextPage} navData={next} type="next" />
      )}
    </section>
  );
}
