'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Blog } from '@interfaces/Blog';
import Detail from './Detail';
import classNames from 'classnames';

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
    <section
      className={classNames('flex space-x-4', !prev && next && 'justify-end')}
    >
      {prev && (
        <Detail handleMovePage={moveToPrevPage} navData={prev} type="prev" />
      )}
      {next && (
        <Detail handleMovePage={moveToNextPage} navData={next} type="next" />
      )}
    </section>
  );
}
