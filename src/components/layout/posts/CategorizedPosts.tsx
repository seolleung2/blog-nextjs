import React from 'react';
import { getAllPosts } from '@service/posts';
import PostList from './PostList';

export default async function CategorizedPosts() {
  const posts = await getAllPosts();

  return (
    <section className="mt-6">
      <h2 className="mb-4 text-xl font-bold text-slate-800 lg:text-2xl">
        All Posts
      </h2>
      <PostList posts={posts} />
    </section>
  );
}
