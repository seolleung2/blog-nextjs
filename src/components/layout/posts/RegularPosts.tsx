import React from 'react';
import { getRegularBlogs } from '@service/lib/blogs';
import PostList from './PostList';

export default async function RegularPosts() {
  const blogs = await getRegularBlogs();
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-xl font-bold text-slate-800 dark:text-white lg:text-2xl">
        이 블로그 주제도 좋아요
      </h2>
      <PostList blogs={blogs} />
    </section>
  );
}
