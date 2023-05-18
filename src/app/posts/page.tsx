import React from 'react';
import Categories from '@components/categories';
import { CategorizedPosts } from '@components/layout/posts';

export default function PostsPage() {
  return (
    <section>
      <Categories />
      {/* @ts-expect-error Async Server Component */}
      <CategorizedPosts />
    </section>
  );
}
