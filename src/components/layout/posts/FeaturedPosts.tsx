import React from 'react';
import { getFeaturedBlogs } from '@service/lib/blogs';
import PostList from './PostList';

export default async function FeaturedPosts() {
  const blogs = await getFeaturedBlogs();

  return (
    <section className="mt-6">
      <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-white lg:text-2xl">
        추천 블로그 아티클
      </h2>
      <PostList blogs={blogs} />
    </section>
  );
}
