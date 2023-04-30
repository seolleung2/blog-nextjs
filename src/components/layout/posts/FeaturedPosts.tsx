import React from 'react';
import { getFeaturedPosts } from '@service/posts';
import PostList from './PostList';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mt-6">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
        Featured Posts
      </h2>
      <PostList posts={posts} />
    </section>
  );
}
